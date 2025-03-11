# Ejecucion en Local
*Requerimiento*
1. NodeJS 23.6.
2. NextJS 15.2.*
3. PosgreSQL

Ejecutar los siguientes pasos:
> npm install
> prisma generate
> prisma migrate dev --name initial
> npm run seed
> npm run dev



# Ejecucion en producción
Para desplegar en vercel es necesario vincular el repositorio con la cuenta de vercel.
Establecer la variables de entorno requerida y pasar a producción