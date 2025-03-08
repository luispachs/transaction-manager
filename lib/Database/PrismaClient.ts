import {PrismaClient} from '@prisma/client';

const client =new PrismaClient();

Object.freeze(client);
export {client};
