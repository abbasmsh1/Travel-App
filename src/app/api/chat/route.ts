import { NextResponse } from 'next/server'

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY
const MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1'

const systemPrompt = `You are a helpful travel assistant for Saffarlog, a travel website focused on tourism in Pakistan. 
You help users plan their trips to Pakistan, provide information about destinations, and answer questions about travel requirements, 
local customs, and attractions. Your responses should be friendly, informative, and focused on making travel planning easier.

Key points to remember:
- Focus on Pakistan's tourism
- Provide accurate, up-to-date travel information
- Be culturally sensitive and respectful
- Suggest specific destinations based on user interests
- Include practical travel tips and safety advice
- Maintain a helpful and friendly tone`

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages } = body

    if (!TOGETHER_API_KEY) {
      return NextResponse.json(
        { error: 'Together API key is not configured' },
        { status: 500 }
      )
    }

    // Format messages for the Together AI API
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }))

    // Add system prompt at the beginning
    formattedMessages.unshift({
      role: 'system',
      content: systemPrompt
    })

    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOGETHER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get response from Together AI')
    }

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 