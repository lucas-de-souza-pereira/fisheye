import { PrismaClient } from "../../../generated/prisma/client.ts"
import path from 'path'

const globalForPrisma = globalThis;

const prismaClientSingleton = () => {
  let datasourceUrl = undefined;
  if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('file:.')) {
    const relativePath = process.env.DATABASE_URL.replace('file:', '');
    datasourceUrl = 'file:' + path.join(process.cwd(), relativePath);
  }

  return new PrismaClient({
    datasources: datasourceUrl ? { db: { url: datasourceUrl } } : undefined
  });
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


export const getAllPhotographers = () => prisma.photographer.findMany();

export const getPhotographer = (id) =>
  prisma.photographer.findUnique({
    where: { id },
  });

export const getAllMediasForPhotographer = (photographerId) =>
  prisma.media.findMany({
    where: { photographerId },
  });

export const updateNumberOfLikes = (mediaId, newNumberOfLikes) =>
  prisma.media.update({
    where: { id: mediaId },
    data: { likes: newNumberOfLikes },
  });