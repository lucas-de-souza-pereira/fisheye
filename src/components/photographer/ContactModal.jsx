
import { useEffect, useRef } from "react"

export default function ContactModal({ isOpen, onClose, name }) {
    const modalRef = useRef(null)

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e) => {

            if (e.key === "Escape") {
                onClose()
            }

            if (e.key === "Tab") {
                const focusableElements = modalRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
        }

        document.addEventListener("keydown", handleKeyDown)

        const focusableElements = modalRef.current.querySelectorAll('button, input, textarea')
        if (focusableElements.length > 0) {
            focusableElements[0].focus()
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-grey/20" onClick={onClose}></div>
            <dialog
                ref={modalRef}
                className="relative bg-[#DB8876] px-8.75 pt-5 pb-9.5 rounded-[5px] shadow-lg z-10 w-[669px]"
                open={isOpen}
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="flex justify-between items-start mb-5 relative">
                    <h1 id="modal-title" className="text-[64px] font-normal text-black leading-none">
                        Contactez-moi<br />
                        {name}
                    </h1>
                    <button onClick={onClose} className="absolute top-4 right-0" aria-label="Fermer le formulaire de contact">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <form action="" onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const data = Object.fromEntries(formData)
                    console.log("Formulaire envoyé :", data)
                    onClose()
                }} className="flex flex-col gap-y-1">
                    <label id="label-firstname" htmlFor="firstName" className="text-[#312E2E] font-medium text-4xl">Prénom</label>
                    <input aria-labelledby="label-firstname" type="text" id="firstName" name="firstName" required className="bg-white h-17 rounded-[5px] px-2.5 py-5.25" />

                    <label id="label-lastname" htmlFor="lastName" className="text-[#312E2E] font-medium text-4xl">Nom</label>
                    <input aria-labelledby="label-lastname" type="text" id="lastName" name="lastName" required className="bg-white h-17 rounded-[5px] px-2.5 py-5.25" />

                    <label id="label-email" htmlFor="email" className="text-[#312E2E] font-medium text-4xl">Email</label>
                    <input aria-labelledby="label-email" type="email" id="email" name="email" required className="bg-white h-17 rounded-[5px] px-2.5 py-5.25" />

                    <label id="label-message" htmlFor="message" className="text-[#312E2E] font-medium text-4xl">Message</label>
                    <textarea aria-labelledby="label-message" id="message" name="message" required className="bg-white h-42.5 rounded-[5px] px-2.5 py-5.25 resize-none"></textarea>

                    <button aria-label="Envoyer" type="submit" className="bg-primary text-white text-lg font-bold rounded-[5px]  px-12.5 py-5.75 text-center align-middle mt-5.5 w-42.5 cursor-pointer">Envoyer</button>
                </form>
            </dialog>
        </div>
    )
}