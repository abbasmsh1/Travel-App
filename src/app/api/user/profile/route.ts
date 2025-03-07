import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

export async function PATCH(req: Request) {
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

    const { name, email, profileImage } = await req.json()

    // If email is being updated, check if it's already taken
    if (email) {
      const existingUser = await prisma.user.findUnique({
        where: { 
          email,
          NOT: {
            id: decoded.userId
          }
        }
      })

      if (existingUser) {
        return NextResponse.json(
          { error: 'Email already taken' },
          { status: 400 }
        )
      }
    }

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: {
        id: decoded.userId
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(profileImage && { profileImage })
      }
    })

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        profileImage: updatedUser.profileImage
      }
    })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
} 