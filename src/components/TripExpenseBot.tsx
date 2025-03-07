'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PaperAirplaneIcon, CalculatorIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { calculateTripExpense, expenseData, TravelStyle } from '@/data/expenseData'
import { generateItinerary, itineraryData } from '@/data/itineraryData'

interface Message {
  role: 'assistant' | 'user'
  content: string
}

interface ExpenseResult {
  region: string
  style: TravelStyle
  days: number
  people: number
  total: number
  breakdown: {
    accommodation: number
    food: number
    transportation: number
    activities: number
  }
}

export default function TripExpenseBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I can help you calculate trip expenses in Pakistan. Just tell me where you want to go (Northern, Coastal, or Central Pakistan), your travel style (budget, standard, or luxury), number of days, and people.'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [lastExpense, setLastExpense] = useState<ExpenseResult | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const processMessage = (message: string) => {
    const words = message.toLowerCase().split(' ')
    
    // Try to extract information from the message
    const region = Object.keys(expenseData).find(r => 
      message.toLowerCase().includes(r.toLowerCase())
    )
    const style = ['budget', 'standard', 'luxury'].find(s => 
      words.includes(s)
    ) as TravelStyle | undefined
    const days = words.findIndex(w => w === 'days' || w === 'day') > 0 
      ? parseInt(words[words.findIndex(w => w === 'days' || w === 'day') - 1])
      : undefined
    const people = words.findIndex(w => w === 'people' || w === 'person' || w === 'persons') > 0
      ? parseInt(words[words.findIndex(w => w === 'people' || w === 'person' || w === 'persons') - 1])
      : undefined

    // Extract activity preferences
    const preferences = ['sight', 'activity', 'nature', 'culture'].filter(pref => 
      words.includes(pref)
    )

    if (region && style && days && people) {
      try {
        // Calculate expenses
        const expenseResult = calculateTripExpense(region, style, days, people)
        setLastExpense({
          region,
          style,
          days,
          people,
          ...expenseResult
        })

        // Generate itinerary
        const itinerary = generateItinerary(region, days, preferences.length > 0 ? preferences : undefined)
        
        return `${formatExpenseResult({
          region,
          style,
          days,
          people,
          ...expenseResult
        })}

📅 Suggested Itinerary:
${formatItinerary(itinerary)}

🌟 Best Time to Visit: ${itinerary.bestTimeToVisit}

💡 Travel Tips:
${itinerary.tips.map(tip => `• ${tip}`).join('\n')}`
      } catch (error) {
        return "I couldn't calculate the expenses and itinerary. Please try again with valid information."
      }
    }

    // If missing information, ask for it
    if (!region) {
      return "Please specify a region (Northern, Coastal, or Central Pakistan)."
    }
    if (!style) {
      return "What's your preferred travel style (budget, standard, or luxury)?"
    }
    if (!days) {
      return "How many days are you planning to stay?"
    }
    if (!people) {
      return "For how many people should I calculate the expenses?"
    }

    return "I couldn't understand that. Please provide region, style, days, and number of people."
  }

  const formatExpenseResult = (result: ExpenseResult) => {
    return `Here's the expense breakdown for ${result.people} people in ${result.region} for ${result.days} days (${result.style} style):

🏨 Accommodation: $${result.breakdown.accommodation}
🍽️ Food: $${result.breakdown.food}
🚗 Transportation: $${result.breakdown.transportation}
🎯 Activities: $${result.breakdown.activities}

💰 Total estimated cost: $${result.total}

This includes daily expenses for accommodation, food, local transportation, and activities. Prices may vary based on season and availability.`
  }

  const formatItinerary = (itinerary: ReturnType<typeof generateItinerary>) => {
    return itinerary.dailyPlan.map(day => `
Day ${day.day}:
${day.activities.map(activity => 
  `${activity.startTime} - ${activity.endTime}: ${activity.attraction.name}
  ${activity.attraction.description}`
).join('\n')}`
    ).join('\n')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    const response = processMessage(userMessage)
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <CalculatorIcon className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Trip Expense Calculator</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'assistant'
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-primary text-white'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <p>Calculating...</p>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., 5 days in Northern Pakistan for 2 people, standard style"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 