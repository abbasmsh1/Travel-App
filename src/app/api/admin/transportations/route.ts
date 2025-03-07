import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

// GET /api/admin/transportations
export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as { id: string, role: string }
    
    if (decoded.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const transportations = await prisma.transportation.findMany({
      include: {
        location: true
      }
    })

    return NextResponse.json({ transportations })
  } catch (error) {
    console.error('Failed to fetch transportations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/admin/transportations
export async function POST(request: Request) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as { id: string, role: string }
    
    if (decoded.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const data = await request.json()
    
    const transportation = await prisma.transportation.create({
      data: {
        type: data.type,
        description: data.description,
        baseCost: data.baseCost,
        locationId: data.locationId,
        availability: data.availability
      }
    })

    return NextResponse.json({ transportation })
  } catch (error) {
    console.error('Failed to create transportation:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/admin/transportations
export async function PUT(request: Request) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as { id: string, role: string }
    
    if (decoded.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const data = await request.json()
    
    const transportation = await prisma.transportation.update({
      where: {
        id: data.id
      },
      data: {
        type: data.type,
        description: data.description,
        baseCost: data.baseCost,
        locationId: data.locationId,
        availability: data.availability
      }
    })

    return NextResponse.json({ transportation })
  } catch (error) {
    console.error('Failed to update transportation:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 