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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await prisma.location.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      message: 'Location deleted successfully'
    })
  } catch (error) {
    console.error('Delete location error:', error)
    return NextResponse.json(
      { error: 'Failed to delete location' },
      { status: 500 }
    )
  }
} 