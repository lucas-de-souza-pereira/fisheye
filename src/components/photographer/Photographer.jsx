import Image from "next/image"
import Link from "next/link"

export default function Photographer({ name, city, country, tagline, price, portrait }) {
    return (
        <article className="flex flex-col items-center w-[300px]">
            <Link href={`/photographer/${name}`} className="flex flex-col items-center">
                <div className="h-[200px] w-[200px] relative overflow-hidden rounded-full">
                    <Image src={`/assets/${portrait}`}
                        alt={`Portrait de ${name}`}
                        fill
                        className="object-cover " />
                </div>
                <h3 className="text-4xl font-normal text-secondary align-center mt-5">{name}</h3>
            </Link>

            <div className="flex flex-col items-center gap-y-0.5">
                <p className="text-[13px] font-normal text-primary align-center">{city}, {country}</p>
                <p className="text-[10px] font-normal text-foreground align-center">{tagline}</p>
                <p className="text-[10px] font-normal foreground align-center">{price}€/jour</p>
            </div>
        </article>
    )
}