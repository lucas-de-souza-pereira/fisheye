'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-6 text-center px-4">
            <h2 className="text-2xl font-bold text-gray-800">
                Une erreur est survenue !
            </h2>
            <p className="text-gray-600 max-w-md">
                Nous rencontrons des difficultés pour charger cette page.
                Veuillez réessayer.
            </p>
            <button
                onClick={
                    () => reset()
                }
                className="px-6 py-3 bg-primary text-white rounded-md font-bold hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                Réessayer
            </button>
        </div>
    )
}
