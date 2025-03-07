import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

async function checkAdmin() {
  const token = cookies().get('auth-token')?.value

  if (!token) {
    return false
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-jwt-secret-key'
    ) as { userId: string }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    })

    return user?.role === 'ADMIN'
  } catch {
    return false
  }
}

export async function GET() {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const locations = await prisma.location.findMany({
      orderBy: { name: 'asc' }
    })

    return NextResponse.json({ locations })
  } catch (error) {
    console.error('Get locations error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch locations' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await req.json()

    const location = await prisma.location.create({
      data: {
        name: data.name,
        region: data.region,
        country: data.country,
        description: data.description,
        imageUrl: data.imageUrl || null,
        climate: data.climate || null,
        bestTimeToVisit: data.bestTimeToVisit || null
      }
    })

    return NextResponse.json({ location })
  } catch (error) {
    console.error('Create location error:', error)
    return NextResponse.json(
      { error: 'Failed to create location' },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await req.json()

    const location = await prisma.location.update({
      where: { id: data.id },
      data: {
        name: data.name,
        region: data.region,
        country: data.country,
        description: data.description,
        imageUrl: data.imageUrl || null,
        climate: data.climate || null,
        bestTimeToVisit: data.bestTimeToVisit || null
      }
    })

    return NextResponse.json({ location })
  } catch (error) {
    console.error('Update location error:', error)
    return NextResponse.json(
      { error: 'Failed to update location' },
      { status: 500 }
    )
  }
} 