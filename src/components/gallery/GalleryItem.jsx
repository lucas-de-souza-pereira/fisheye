import Image from "next/image"
import { ASSETS_PATH } from "@/utils/config"

export default function GalleryItem({ media }) {

    const { title, image, video, likes } = media
    const isVideo = !!video
    const isContent = !!video & !!image

    if (isContent) return (
        <article className="flex flex-col h-[351px]  w-[350px]">
            <div className="relative h-[300px] w-[350px] overflow-hidden rounded-[5px]">
                <span className="bg-grey w-full h-full"></span>
            </div>
            <div className="flex-1 flex justify-between items-center text-primary text-2xl">
                <p className="font-normal">Image non trouvée</p>
                <div className="flex gap-x-1 items-center">
                    <p className="font-medium">0</p>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#911C1C" />
                    </svg>
                </div>
            </div>
        </article>
    )

    return (
        <article className="flex flex-col h-[351px]  w-[350px]">
            <div className="relative h-[300px] w-[350px] overflow-hidden rounded-[5px]">
                {isVideo ? (
                    <video src={ASSETS_PATH + video} className="h-full w-full object-cover" muted />
                ) : (
                    <Image src={ASSETS_PATH + image} alt={title} fill className="object-cover " sizes="1200px" />
                )}
            </div>
            <div className="flex-1 flex justify-between items-center text-primary text-2xl">
                <p className="font-normal">{title}</p>
                <div className="flex gap-x-1 items-center">
                    <p className="font-medium">{likes}</p>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#911C1C" />
                    </svg>
                </div>
            </div>
        </article>
    )
}