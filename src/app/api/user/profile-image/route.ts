import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

export async function POST(request: Request) {
  try {
    const token = cookies().get('token')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const { userId } = jwt.verify(token.value, process.env.JWT_SECRET!) as { userId: string }
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Process image with sharp
    const processedImageBuffer = await sharp(buffer)
      .resize(400, 400, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer()

    // Generate unique filename
    const filename = `${userId}-${Date.now()}.jpg`
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'profiles')
    const filepath = join(uploadDir, filename)

    // Save file
    await writeFile(filepath, processedImageBuffer)

    // Update user profile
    const imageUrl = `/uploads/profiles/${filename}`
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profileImage: imageUrl },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        role: true
      }
    })

    return NextResponse.json({ 
      imageUrl,
      user: updatedUser
    })
  } catch (error) {
    console.error('Profile image upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
} 