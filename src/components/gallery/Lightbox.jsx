import Image from "next/image"
import { ASSETS_PATH } from "@/utils/config"

import { useEffect, useRef } from "react"

export default function Lightbox({ isOpen, onClose, media, index, setIndex }) {

    const modalRef = useRef(null)

    useEffect(() => {

        if (!isOpen) return

        const handleKeyDown = (e) => {

            if (e.key === "Escape") {
                onClose()
            }

            if (e.key === "Tab") {
                const focusableElements = modalRef.current.querySelectorAll(
                    'button, [href], input, select, textearea, [tabindex]:not([tabindex="-1"])'
                )

                const firstElement = focusableElements[0]
                const lastElement = focusableElements[focusableElements.length - 1]

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault()
                        lastElement.focus()
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault()
                        firstElement.focus()
                    }
                }
            }

            if (e.key === "ArrowLeft") {
                handlePrev()
            }

            if (e.key === "ArrowRight") {
                handleNext()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        const focusableElements = modalRef.current.querySelectorAll('button')
        if (focusableElements.length > 0) {
            focusableElements[0].focus()
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }

    }, [isOpen, onClose])


    if (!isOpen) return

    const handleNext = () => {
        if (index == media.length - 1) return setIndex(0)
        setIndex((i) => i + 1)
    }
    const handlePrev = () => {
        if (index == 0) return setIndex(media.length - 1)
        setIndex((i) => i - 1)
    }

    const isVideo = !!media[index].video

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-grey/20" onClick={onClose}></div>
            <dialog
                ref={modalRef}
                className="relative z-10 w-[1240px] flex items-center justify-center gap-x-8.5 rounded-[5px] py-2"
                open={isOpen}
                aria-modal="true"
                aria-label="Image en vue rapproché"
            >


                <button onClick={onClose} className="absolute top-3.75 right-6.75 z-10 cursor-pointer" aria-label="Fermer la modale">
                    {/* cross */}
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#911C1C" />
                    </svg>
                </button>

                {/* left */}
                <button className="cursor-pointer" onClick={handlePrev} aria-label="Image précédente">
                    <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#911C1C" />
                    </svg>
                </button>

                <div className="flex flex-col gap-y-3 items-start">
                    <div className="relative w-[1050px] h-[85vh] flex items-center justify-center bg-transparent overflow-hidden rounded-[5px]">
                        {isVideo ? (
                            <>
                                {/* Vidéo de fond floutée */}
                                <video
                                    src={ASSETS_PATH + media[index].video}
                                    muted
                                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50 -z-10"
                                />
                                {/* Vidéo principale*/}
                                <video
                                    src={ASSETS_PATH + media[index].video}
                                    aria-label={media[index].title}
                                    controls
                                    className="relative z-10 max-w-full max-h-full object-contain"
                                />

                            </>

                        ) : (
                            <>
                                {/* Image de fond floutée */}
                                <Image
                                    src={ASSETS_PATH + media[index].image}
                                    alt=""
                                    fill
                                    className="object-cover blur-xl scale-110 opacity-50 -z-10"
                                />
                                {/* Image principale */}
                                <Image
                                    src={ASSETS_PATH + media[index].image}
                                    alt={media[index].title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1250px) 100vw, 1050px"
                                />
                            </>
                        )}
                    </div>
                    <p className="text-primary font-normal text-2xl">{media[index].title}</p>
                </div>

                {/* right */}
                <button className="cursor-pointer" onClick={handleNext} aria-label="Image suivante">
                    <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.05138e-07 5.64L18.32 24L6.72563e-08 42.36L5.64 48L29.64 24L5.64 3.88195e-06L5.05138e-07 5.64Z" fill="#911C1C" />
                    </svg>
                </button>



            </dialog>
        </div>
    )
}
