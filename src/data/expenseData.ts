interface ExpenseData {
  [region: string]: {
    accommodation: {
      budget: number
      standard: number
      luxury: number
    }
    food: {
      budget: number
      standard: number
      luxury: number
    }
    transportation: {
      budget: number
      standard: number
      luxury: number
    }
    activities: {
      budget: number
      standard: number
      luxury: number
    }
  }
}

export const expenseData: ExpenseData = {
  'Northern Pakistan': {
    accommodation: {
      budget: 30,
      standard: 80,
      luxury: 200
    },
    food: {
      budget: 15,
      standard: 30,
      luxury: 60
    },
    transportation: {
      budget: 20,
      standard: 50,
      luxury: 150
    },
    activities: {
      budget: 25,
      standard: 50,
      luxury: 100
    }
  },
  'Coastal Pakistan': {
    accommodation: {
      budget: 25,
      standard: 70,
      luxury: 180
    },
    food: {
      budget: 12,
      standard: 25,
      luxury: 50
    },
    transportation: {
      budget: 15,
      standard: 40,
      luxury: 120
    },
    activities: {
      budget: 20,
      standard: 40,
      luxury: 80
    }
  },
  'Central Pakistan': {
    accommodation: {
      budget: 35,
      standard: 90,
      luxury: 250
    },
    food: {
      budget: 18,
      standard: 35,
      luxury: 70
    },
    transportation: {
      budget: 25,
      standard: 60,
      luxury: 180
    },
    activities: {
      budget: 30,
      standard: 60,
      luxury: 120
    }
  }
}

export type TravelStyle = 'budget' | 'standard' | 'luxury'
export type ExpenseCategory = 'accommodation' | 'food' | 'transportation' | 'activities'

export function calculateTripExpense(
  region: string,
  style: TravelStyle,
  days: number,
  people: number
): {
  total: number
  breakdown: Record<ExpenseCategory, number>
} {
  const regionData = expenseData[region]
  if (!regionData) {
    throw new Error(`No data available for region: ${region}`)
  }

  const breakdown = {
    accommodation: regionData.accommodation[style] * days * (Math.ceil(people / 2)), // Assuming 2 people per room
    food: regionData.food[style] * days * people,
    transportation: regionData.transportation[style] * days,
    activities: regionData.activities[style] * days * people
  }

  const total = Object.values(breakdown).reduce((sum, cost) => sum + cost, 0)

  return { total, breakdown }
} 