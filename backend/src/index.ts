import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';

const app = new Elysia()
.use(swagger()) 
.get('/', () => 'Hello Elysia')
.get('/hello', 'Do you miss me?')
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
