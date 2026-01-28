import { getAllMediasForPhotographer } from "@/app/lib/prisma-db"



export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const photographer = await getAllMediasForPhotographer(parseInt(id));

    return Response.json(photographer);
}


