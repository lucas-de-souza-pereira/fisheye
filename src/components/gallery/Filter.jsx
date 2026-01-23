"use client"

import { useState } from "react"

export default function Filter({ sortValue, filterOptions, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false)

    const selectedOption = filterOptions.filter(opt => opt.value === sortValue)
    const otherOptions = filterOptions.filter(opt => opt.value !== sortValue)

    return (
        <div className="bg-primary w-[170px] h-min-[69px] flex flex-col items-center justify-center">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-x-2 ">
                {selectedOption[0].label}
                {isOpen ?
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.88 9.87988L8 3.77322L14.12 9.87988L16 7.99988L8 -0.000118001L1.64355e-07 7.99988L1.88 9.87988Z" fill="white" />
                    </svg>
                    : <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z" fill="white" />
                    </svg>
                }
            </button>
            {isOpen && (
                <ul>
                    {otherOptions.map((options, index) =>
                        <li key={options.value}
                            onClick={() => {
                                onSortChange(otherOptions[index].value)
                                setIsOpen(false)
                            }}>
                            {options.label}
                        </li>
                    )}

                </ul>

            )
            }
        </div >
    )
}

