import { PrismaClient } from "@/generated/prisma/client"

const globalForPrisma = globalThis;
const prisma = globalForPrisma.__prismaClient || new PrismaClient();
if (!globalForPrisma.__prismaClient) globalForPrisma.__prismaClient = prisma;

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