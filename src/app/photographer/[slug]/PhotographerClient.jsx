"use client"

import { useState } from "react"
import Filter from "@/components/gallery/Filter"
import GalleryItem from "@/components/gallery/GalleryItem"
import Lightbox from "@/components/gallery/Lightbox"

const filterOptions = [
    { value: "likes", label: "Popularité" },
    { value: "date", label: "Date" },
    { value: "title", label: "Titre" },
]

export default function PhotographerClient({ media, sumLikes, price }) {
    const [sort, setSort] = useState("date")
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const [totalLikes, setTotalLikes] = useState(sumLikes)

    const sortMedia = (s) => {
        if (s === "title") return media.sort((a, b) => a[s].localeCompare(b[s]))
        if (s === "likes") return media.sort((a, b) => b[s] - a[s])
        if (s === "date") return media.sort((a, b) => new Date(b[s]) - new Date(a[s]))


    }

    sortMedia(sort)
    console.log(media)


    return (
        <div>

            <Filter label="Popularité" filterOptions={filterOptions} />
            <div className="flex flex-wrap gap-x-23.75 gap-y-5 mt-13">
                {media.map((media, index) => (
                    <GalleryItem key={media.id} media={media} onOpen={() => {
                        setIndex(index)
                        setIsOpen(true)
                    }}
                        onLike={() => setTotalLikes(totalLikes + 1)} />
                ))}
            </div>
            <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)} media={media} index={index} setIndex={setIndex} />

            <aside className="fixed bottom-0 right-9 flex items-center bg-[#DB8876] rounded-t-[5px] text-black text-2xl font-medium px-8 py-5 gap-15 z-50">
                <div className="flex items-center gap-2">
                    <span>{totalLikes}</span>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="black" />
                    </svg>
                </div>
                <p>{price}€ / jour</p>
            </aside>

        </div>
    )
}