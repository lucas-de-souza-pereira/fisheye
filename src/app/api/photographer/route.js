import { getPhotographer } from "@/app/lib/prisma-db"



export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const photographer = await getPhotographer(parseInt(id));

    return Response.json(photographer);
}


