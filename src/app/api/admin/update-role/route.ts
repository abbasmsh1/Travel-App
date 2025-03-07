import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

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

    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: 'ADMIN' }
    })

    return NextResponse.json({
      message: 'User role updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        role: updatedUser.role
      }
    })
  } catch (error) {
    console.error('Failed to update user role:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 