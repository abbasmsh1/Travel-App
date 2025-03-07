import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const token = cookies().get('token')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const { userId } = jwt.verify(token.value, process.env.JWT_SECRET!) as { userId: string }

    // Get user's trips
    const trips = await prisma.trip.findMany({
      where: { userId }
    })

    // Calculate trip statistics
    const totalTrips = trips.length
    const averageTripDuration = totalTrips > 0
      ? Math.round(
          trips.reduce((acc, trip) => {
            const start = new Date(trip.startDate)
            const end = new Date(trip.endDate)
            const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
            return acc + days
          }, 0) / totalTrips
        )
      : 0

    // Calculate favorite regions
    const regionCounts = trips.reduce((acc: { [key: string]: number }, trip) => {
      trip.destinations.forEach(destination => {
        acc[destination] = (acc[destination] || 0) + 1
      })
      return acc
    }, {})

    const favoriteRegions = Object.entries(regionCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6)

    return NextResponse.json({
      totalTrips,
      averageTripDuration,
      favoriteRegions
    })
  } catch (error) {
    console.error('Preferences fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 