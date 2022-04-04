import {PrismaClient} from '@prisma/client';
import {prisma} from '../libs/prisma';

export type Context = {
  prisma: PrismaClient;
};

export const createContext = async (): Promise<Context> => ({
  prisma: await prisma.$connect(),
});
