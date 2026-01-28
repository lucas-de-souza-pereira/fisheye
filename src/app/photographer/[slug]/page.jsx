
import { getPhotographer, getAllMediasForPhotographer } from "@/app/lib/prisma-db"
import { notFound } from "next/navigation"

import Logo from "@/components/navigation/Logo"
import PhotographerProfile from "@/components/photographer/PhotographerProfile"
import PhotographerClient from "./PhotographerClient"

export default async function PhotographerPage({ params }) {

    const { slug } = await params
    const id = parseInt(slug)

    if (isNaN(id)) return <div>Invalid ID</div>

    const photographer = await getPhotographer(id)
    const media = await getAllMediasForPhotographer(id)

    if (!photographer) {
        return notFound()
    }

    const totalLikes = media.reduce((total, media) => total + media.likes, 0)

    return (
        <div className="mx-25 mb-10">
            <header className="my-10.5" role="banner">

                <Logo />
            </header>

            <main>
                <section aria-label="Présentation du photographe">
                    <PhotographerProfile {...photographer} />
                </section>

                <section aria-label="Galerie photo">
                    <PhotographerClient media={media} sumLikes={totalLikes} price={photographer.price} />
                </section>

            </main>

        </div>
    )
}