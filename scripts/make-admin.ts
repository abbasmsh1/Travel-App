import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function makeAdmin() {
  try {
    const email = 'abbasmsh1@gmail.com'
    
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      console.error('User not found')
      process.exit(1)
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: 'ADMIN' }
    })

    console.log('Successfully updated user role to ADMIN:', updatedUser)
  } catch (error) {
    console.error('Failed to update user role:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

makeAdmin() 