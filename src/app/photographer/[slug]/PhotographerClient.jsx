"use client"

import { useState } from "react"
import Filter from "@/components/gallery/Filter"
import GalleryItem from "@/components/gallery/GalleryItem"

const filterOptions = [
    { value: "popularity", label: "Popularité" },
    { value: "date", label: "Date" },
    { value: "title", label: "Titre" },
]

export default function PhotographerClient({ media }) {
    const [sort, setSort] = useState("popularity")



    return (
        <div>
            <h1>Photographer Client</h1>
            <Filter label="Popularité" filterOptions={filterOptions} />
            <div className="flex flex-wrap gap-x-23.75 gap-y-5 mt-13">
                {media.map((media) => (
                    <GalleryItem key={media.id} media={media} />
                ))}
            </div>
        </div>
    )
}