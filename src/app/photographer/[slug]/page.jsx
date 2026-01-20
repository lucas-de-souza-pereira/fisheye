
import { getPhotographer, getAllMediasForPhotographer } from "@/app/lib/prisma-db"


import Logo from "@/components/navigation/Logo"
import PhotographerProfile from "@/components/photographer/PhotographerProfile"
import PhotographerClient from "./PhotographerClient"

export default async function PhotographerPage({ params }) {

    const { slug } = await params
    const photographer = await getPhotographer(parseInt(slug))
    const media = await getAllMediasForPhotographer(parseInt(slug))

    if (!photographer) {
        // TODO: Redirect to 404 page
        return <div>Photographer not found</div>
    }

    return (
        <div className="mx-25">
            <header className="my-10.5" role="banner">

                <Logo />
            </header>

            <main>
                <section aria-label="Présentation du photographe">
                    <PhotographerProfile {...photographer} />
                </section>

                <section aria-label="Galerie photo">
                    <PhotographerClient media={media} />
                </section>
            </main>

        </div>
    )
}