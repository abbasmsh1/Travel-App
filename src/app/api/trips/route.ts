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

    const trips = await prisma.trip.findMany({
      where: { userId },
      orderBy: { startDate: 'asc' },
      select: {
        id: true,
        title: true,
        startDate: true,
        endDate: true,
        destinations: true,
        notes: true
      }
    })

    return NextResponse.json({ trips })
  } catch (error) {
    console.error('Trips fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 