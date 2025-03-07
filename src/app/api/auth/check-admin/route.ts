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
        { isAdmin: false },
        { status: 401 }
      )
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-jwt-secret-key'
    ) as { userId: string }

    // Get user
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { role: true }
    })

    if (!user) {
      return NextResponse.json(
        { isAdmin: false },
        { status: 404 }
      )
    }

    return NextResponse.json({
      isAdmin: user.role === 'ADMIN'
    })
  } catch (error) {
    console.error('Check admin status error:', error)
    return NextResponse.json(
      { isAdmin: false },
      { status: 500 }
    )
  }
} 