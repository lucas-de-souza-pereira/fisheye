
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
                    <PhotographerClient media={media} />
                </section>

                <aside className="fixed bottom-0 right-9 flex items-center bg-[#DB8876] rounded-t-[5px] text-black text-2xl font-medium px-8 py-5 gap-15 z-50">
                    <div className="flex items-center gap-2">
                        <span>{totalLikes}</span>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="black" />
                        </svg>
                    </div>
                    <p>{photographer.price}€ / jour</p>
                </aside>
            </main>

        </div>
    )
}