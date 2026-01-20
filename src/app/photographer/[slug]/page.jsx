
import Logo from "@/components/navigation/Logo"
import { getPhotographer } from "@/app/lib/prisma-db"
import Image from "next/image"

export default async function PhotographerPage({ params }) {

    const { slug } = await params
    const photographer = await getPhotographer(parseInt(slug))

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
                    <div className="flex items-center justify-between bg-light-grey px-12.5 pt-10 pb-14.25 rounded-[5px]">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[64px] font-normal text-secondary">{photographer.name}</h1>
                            <p className="text-2xl font-normal text-primary">{photographer.city}, {photographer.country}</p>
                            <p className="text-lg font-normal text-grey mt-4.75">{photographer.tagline}</p>
                        </div>
                        <button
                            aria-label="Contactez-moi"
                            className="bg-primary text-white text-xl font-bold rounded-[5px]  px-2.5 py-5.25 text-center align-middle">
                            Contactez-moi
                        </button>
                        <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full shadow-lg">
                            <Image
                                src={`/assets/${photographer.portrait}`}
                                alt={`${photographer.name}`}
                                fill
                                sizes="400px"
                                className="object-cover scale-110 transform-gpu"
                                priority={true}
                            />
                        </div>
                    </div>
                </section>

                <section aria-label="Galerie photo">

                </section>
            </main>

        </div>
    )
}