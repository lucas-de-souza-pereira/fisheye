"use client"

import Image from "next/image"
import { useState } from "react"
import ContactModal from "./ContactModal"

export default function PhotographerProfile({ name, city, country, tagline, price, portrait }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center justify-between bg-light-grey px-12.5 pt-10 pb-14.25 rounded-[5px]">
            <div className="flex flex-col items-start">
                <h1 className="text-[64px] font-normal text-secondary">{name}</h1>
                <p className="text-2xl font-normal text-primary">{city}, {country}</p>
                <p className="text-lg font-normal text-grey mt-4.75">{tagline}</p>
            </div>
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Contactez-moi"
                className="bg-primary text-white text-xl font-bold rounded-[5px]  px-2.5 py-5.25 text-center align-middle hover:bg-db-88-76 hover:text-black transition-colors">
                Contactez-moi
            </button>
            <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} name={name} />
            <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full shadow-lg">
                <Image
                    src={`/assets/${portrait}`}
                    alt={`${name}`}
                    fill
                    sizes="400px"
                    className="object-cover scale-110 transform-gpu"
                    priority={true}
                />
            </div>
        </div>
    )
}