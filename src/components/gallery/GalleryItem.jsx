import Image from "next/image"
import { ASSETS_PATH } from "@/utils/config"

export default function GalleryItem({ media }) {

    const { title, image, video, likes } = media
    const isVideo = !!video


    return (
        <article>
            <div className="relative h-[350px] w-[300px] overflow-hidden">
                {isVideo ? (
                    <video src={ASSETS_PATH + video} alt={title} muted width={300} height={350} />
                ) : (
                    <Image src={ASSETS_PATH + image} alt={title} fill className="object-cover   " />
                )}
            </div>
            <p>{title}</p>
            <p>{likes}</p>
        </article>
    )
}