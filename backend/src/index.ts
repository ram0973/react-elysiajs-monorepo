import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import type { User } from '@prisma/client'
import prisma from '@/lib/prisma'

async function main() {
  const allUsers: User[] = await prisma.user.findMany()
  console.log(`All users: ${allUsers[0]?.name}`)
  return allUsers
}

const app = new Elysia()
.use(swagger()) 
.get('/', () => {
  const users = main()
  return users ?? []
})
.get('/hello', 'Do you miss me?')
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
