import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'
import sharp from 'sharp'

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

export async function POST(req: Request) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const formData = await req.formData()
    const file = formData.get('image') as File
    const type = formData.get('type') as string
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Process image with sharp
    const processedImage = await sharp(buffer)
      .resize(1200, 800, {
        fit: 'cover',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 })
      .toBuffer()

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
    const filename = `${type}-${uniqueSuffix}.jpg`
    
    // Ensure upload directories exist
    const publicDir = join(process.cwd(), 'public')
    const uploadsDir = join(publicDir, 'uploads')
    const typeDir = join(uploadsDir, type)

    try {
      await mkdir(uploadsDir, { recursive: true })
      await mkdir(typeDir, { recursive: true })
    } catch (error) {
      console.error('Failed to create directories:', error)
    }

    // Save file
    const filepath = join(typeDir, filename)
    await writeFile(filepath, processedImage)

    // Return the URL for the uploaded image
    const imageUrl = `/uploads/${type}/${filename}`

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
} 