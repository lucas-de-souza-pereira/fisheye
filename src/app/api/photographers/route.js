import { getAllPhotographers } from "@/app/lib/prisma-db"



export async function GET() {
  const photographers = await getAllPhotographers();
  return Response.json(photographers);
}


