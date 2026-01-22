import Image from "next/image"
import { ASSETS_PATH } from "@/utils/config"

export default function Lightbox({ isOpen, onClose, image, video, title }) {
    if (!isOpen) return




    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-grey/20" onClick={onClose}></div>
            <dialog
                className="relative z-10 w-[1240px] flex items-center justify-center gap-x-8.5 rounded-[5px] py-2"
                open={isOpen}

            >


                <button onClick={onClose} className="absolute top-3.75 right-6.75 z-10">
                    {/* cross */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#911C1C" />
                    </svg>
                </button>

                {/* left */}
                <button className="">
                    <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#911C1C" />
                    </svg>
                </button>

                <div className="flex flex-col gap-y-3">
                    <div className="relative w-[1050px] h-[900px] overflow-hidden rounded-[5px]">
                        <Image src={ASSETS_PATH + image} alt="" fill className="object-cover" sizes="2000px" />
                    </div>
                    <p className="text-primary font-normal text-2xl">{title}</p>
                </div>

                {/* right */}
                <button>
                    <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.05138e-07 5.64L18.32 24L6.72563e-08 42.36L5.64 48L29.64 24L5.64 3.88195e-06L5.05138e-07 5.64Z" fill="#911C1C" />
                    </svg>
                </button>



            </dialog>
        </div>
    )
}
