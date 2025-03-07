import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

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

    const pages = await prisma.pageContent.findMany()
    return NextResponse.json({ pages })
  } catch (error) {
    console.error('Failed to fetch pages:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

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
    
    const page = await prisma.pageContent.create({
      data: {
        page: data.page,
        title: data.title,
        subtitle: data.subtitle,
        content: data.content,
        backgroundUrl: data.backgroundUrl
      }
    })

    return NextResponse.json({ page })
  } catch (error) {
    console.error('Failed to create page:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

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
    
    const page = await prisma.pageContent.update({
      where: { id: data.id },
      data: {
        title: data.title,
        subtitle: data.subtitle,
        content: data.content,
        backgroundUrl: data.backgroundUrl
      }
    })

    return NextResponse.json({ page })
  } catch (error) {
    console.error('Failed to update page:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 