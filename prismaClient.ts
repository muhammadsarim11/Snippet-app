import { PrismaClient } from '@prisma/client'

// Create a singleton Prisma Client to prevent multiple instances in dev
declare global {
  // eslint-disable-next-line no-var
  var prismaClient: PrismaClient | undefined
}

const prisma = global.prismaClient || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prismaClient = prisma

export default prisma
