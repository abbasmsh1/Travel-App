interface Attraction {
  name: string
  description: string
  duration: number // in hours
  type: 'sight' | 'activity' | 'nature' | 'culture'
}

interface RegionData {
  attractions: Attraction[]
  recommendedDays: number[]
  bestTimeToVisit: string
  tips: string[]
}

export const itineraryData: Record<string, RegionData> = {
  'Northern Pakistan': {
    attractions: [
      {
        name: 'Hunza Valley',
        description: 'Spectacular mountain valley with views of Rakaposhi peak and ancient watchtowers',
        duration: 8,
        type: 'nature'
      },
      {
        name: 'Baltit Fort',
        description: 'Historic fort offering panoramic views of Hunza Valley',
        duration: 3,
        type: 'culture'
      },
      {
        name: 'Attabad Lake',
        description: 'Stunning turquoise lake perfect for boating and photography',
        duration: 4,
        type: 'nature'
      },
      {
        name: 'Fairy Meadows',
        description: 'Scenic grassland with spectacular views of Nanga Parbat',
        duration: 8,
        type: 'nature'
      },
      {
        name: 'Khunjerab Pass',
        description: 'World\'s highest paved border crossing with stunning views',
        duration: 6,
        type: 'sight'
      },
      {
        name: 'Naltar Valley',
        description: 'Beautiful valley known for its colorful lakes and skiing',
        duration: 6,
        type: 'activity'
      }
    ],
    recommendedDays: [5, 7, 10],
    bestTimeToVisit: 'May to October',
    tips: [
      'Pack warm clothes as temperatures can drop significantly',
      'Book accommodations in advance during peak season',
      'Hire a local guide for mountain treks',
      'Carry altitude sickness medication'
    ]
  },
  'Coastal Pakistan': {
    attractions: [
      {
        name: 'Clifton Beach',
        description: 'Popular beach in Karachi with camel rides and food stalls',
        duration: 4,
        type: 'activity'
      },
      {
        name: 'Manora Island',
        description: 'Historic lighthouse and beach perfect for day trips',
        duration: 5,
        type: 'sight'
      },
      {
        name: 'French Beach',
        description: 'Pristine private beach ideal for swimming and sunbathing',
        duration: 6,
        type: 'nature'
      },
      {
        name: 'Kund Malir',
        description: 'Remote beach along the Makran Coast Highway',
        duration: 4,
        type: 'nature'
      },
      {
        name: 'Gwadar Port',
        description: 'Deep-sea port with beautiful coastal views',
        duration: 3,
        type: 'sight'
      }
    ],
    recommendedDays: [3, 5, 7],
    bestTimeToVisit: 'October to March',
    tips: [
      'Visit beaches early morning or late afternoon to avoid heat',
      'Respect local customs and dress modestly',
      'Carry sunscreen and stay hydrated',
      'Check tide timings for beach activities'
    ]
  },
  'Central Pakistan': {
    attractions: [
      {
        name: 'Badshahi Mosque',
        description: 'Magnificent Mughal-era mosque in Lahore',
        duration: 3,
        type: 'culture'
      },
      {
        name: 'Lahore Fort',
        description: 'UNESCO World Heritage site with stunning architecture',
        duration: 4,
        type: 'culture'
      },
      {
        name: 'Faisal Mosque',
        description: 'Iconic modern mosque in Islamabad',
        duration: 2,
        type: 'culture'
      },
      {
        name: 'Margalla Hills',
        description: 'Popular hiking trails with city views',
        duration: 5,
        type: 'activity'
      },
      {
        name: 'Walled City of Lahore',
        description: 'Historic old city with bazaars and traditional food',
        duration: 6,
        type: 'culture'
      },
      {
        name: 'Pakistan Monument',
        description: 'National monument with museum in Islamabad',
        duration: 3,
        type: 'culture'
      }
    ],
    recommendedDays: [4, 6, 8],
    bestTimeToVisit: 'November to March',
    tips: [
      'Visit historical sites early to avoid crowds',
      'Try local street food in recommended areas',
      'Use ride-hailing apps for convenient transportation',
      'Book guided tours for historical sites'
    ]
  }
}

export function generateItinerary(
  region: string,
  days: number,
  preferences: string[] = ['sight', 'activity', 'nature', 'culture']
): {
  dailyPlan: Array<{
    day: number
    activities: Array<{
      attraction: Attraction
      startTime: string
      endTime: string
    }>
  }>
  tips: string[]
  bestTimeToVisit: string
} {
  const regionData = itineraryData[region]
  if (!regionData) {
    throw new Error(`No itinerary data available for region: ${region}`)
  }

  // Filter attractions based on preferences
  const availableAttractions = regionData.attractions.filter(
    attraction => preferences.includes(attraction.type)
  )

  // Create daily plan
  const dailyPlan = []
  let currentDay = 1
  let remainingAttractions = [...availableAttractions]

  while (currentDay <= days && remainingAttractions.length > 0) {
    let dayHours = 0
    const dayActivities = []

    // Try to fill each day with activities (max 8-9 hours per day)
    while (dayHours < 8 && remainingAttractions.length > 0) {
      const nextAttraction = remainingAttractions[0]
      if (dayHours + nextAttraction.duration <= 9) {
        const startTime = new Date(2024, 0, 1, 9 + dayHours, 0)
        const endTime = new Date(2024, 0, 1, 9 + dayHours + nextAttraction.duration, 0)
        
        dayActivities.push({
          attraction: nextAttraction,
          startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        })
        
        dayHours += nextAttraction.duration
        remainingAttractions.shift()
      } else {
        break
      }
    }

    if (dayActivities.length > 0) {
      dailyPlan.push({
        day: currentDay,
        activities: dayActivities
      })
    }

    currentDay++
    
    // If we run out of attractions, start over
    if (remainingAttractions.length === 0 && currentDay <= days) {
      remainingAttractions = [...availableAttractions]
    }
  }

  return {
    dailyPlan,
    tips: regionData.tips,
    bestTimeToVisit: regionData.bestTimeToVisit
  }
} 