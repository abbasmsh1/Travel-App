import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Get the token from cookies
    const token = cookies().get('auth-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-jwt-secret-key'
    ) as { userId: string }

    // Get user's trips
    const trips = await prisma.trip.findMany({
      where: {
        userId: decoded.userId
      }
    })

    // Calculate preferences
    const totalTrips = trips.length
    
    // Calculate average trip duration
    const averageTripDuration = totalTrips > 0
      ? Math.round(
          trips.reduce((acc, trip) => {
            const start = new Date(trip.startDate)
            const end = new Date(trip.endDate)
            const duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
            return acc + duration
          }, 0) / totalTrips
        )
      : 0

    // Calculate favorite regions
    const regionCounts = new Map<string, number>()
    trips.forEach(trip => {
      trip.destinations.forEach(destination => {
        const region = destination.split(',')[0].trim() // Assuming format: "City, Region"
        regionCounts.set(region, (regionCounts.get(region) || 0) + 1)
      })
    })

    const favoriteRegions = Array.from(regionCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6) // Top 6 regions

    return NextResponse.json({
      totalTrips,
      averageTripDuration,
      favoriteRegions
    })
  } catch (error) {
    console.error('Error fetching preferences:', error)
    return NextResponse.json(
      { error: 'Failed to fetch preferences' },
      { status: 500 }
    )
  }
} 