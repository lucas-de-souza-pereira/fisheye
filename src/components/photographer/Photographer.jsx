import Image from "next/image"
import Link from "next/link"

export default function Photographer({ id, name, city, country, tagline, price, portrait }) {

    return (
        <article className="flex flex-col items-center w-[300px]">
            <Link href={`/photographer/${id}`} className="flex flex-col items-center">
                <div className="h-[200px] w-[200px] relative overflow-hidden rounded-full shadow-lg ">
                    <Image src={`/assets/${portrait}`}
                        alt=""
                        fill
                        priority={true}
                        sizes="400px"
                        className="object-cover scale-110 transform-gpu" />
                </div>
                <h2 className="text-4xl font-normal text-secondary align-center mt-5">{name}</h2>
            </Link>

            <div className="flex flex-col items-center gap-y-0.5">
                <p className="text-[13px] font-normal text-primary align-center">{city}, {country}</p>
                <p className="text-[10px] font-normal text-foreground align-center">{tagline}</p>
                <p className="text-[10px] font-normal foreground align-center">{price}€/jour</p>
            </div>
        </article>
    )
}