import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@saffarlog.com'
  const password = 'Admin@123' // You should change this in production
  const name = 'Admin User'

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user with role as a string literal matching the enum
    const admin = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: 'ADMIN' as const // This matches the UserRole enum in schema
      }
    })

    console.log('Admin user created successfully:', {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    })
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main() 