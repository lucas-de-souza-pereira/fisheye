"use client"

import { useState } from "react"
import Filter from "@/components/gallery/Filter"
import GalleryItem from "@/components/gallery/GalleryItem"


import Lightbox from "@/components/gallery/Lightbox"

const filterOptions = [
    { value: "popularity", label: "Popularité" },
    { value: "date", label: "Date" },
    { value: "title", label: "Titre" },
]

export default function PhotographerClient({ media }) {
    const [sort, setSort] = useState("popularity")
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)

    return (
        <div>

            <Filter label="Popularité" filterOptions={filterOptions} />
            <div className="flex flex-wrap gap-x-23.75 gap-y-5 mt-13">
                {media.map((media, index) => (
                    <GalleryItem key={media.id} media={media} onOpen={() => {
                        setIndex(index)
                        setIsOpen(true)
                    }} />
                ))}
            </div>
            <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)} media={media} index={index} setIndex={setIndex} />
        </div>
    )
}