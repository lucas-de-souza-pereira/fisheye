"use client"

import { useState } from "react"

export default function Filter({ sortValue, filterOptions, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false)


    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false)
        }
    }


    const selectedOption = filterOptions.filter(opt => opt.value === sortValue)
    const otherOptions = filterOptions.filter(opt => opt.value !== sortValue)

    return (
        <div className="relative w-[170px] h-[69px]"
            onBlur={handleBlur}>
            <div className={`absolute top-0 left-0 w-full bg-primary rounded-[5px] flex flex-col items-center justify-center z-20 ${isOpen ? 'rounded-b-[5px]' : 'rounded-[5px]'}`}>
                <button
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}

                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative flex items-center w-[170px] px-5 text-white font-bold text-lg ${isOpen ? 'pt-5.75 pb-[14px]' : 'py-5.75'} cursor-pointer`}
                >
                    {selectedOption[0].label}
                    <div className="absolute right-5">
                        {isOpen ?
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.88 9.87988L8 3.77322L14.12 9.87988L16 7.99988L8 -0.000118001L1.64355e-07 7.99988L1.88 9.87988Z" fill="white" />
                            </svg>
                            : <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z" fill="white" />
                            </svg>
                        }
                    </div>
                </button>
                {isOpen && (
                    <div
                        role="listbox"
                        className="text-white font-bold text-lg w-full px-5  flex flex-col items-start pb-0.5"
                    >
                        {otherOptions.map((options, index) =>
                            <button
                                role="option"
                                aria-selected={sortValue === options.value}
                                tabIndex="0"
                                key={options.value}
                                className="w-full text-left border-t border-white py-3.5 cursor-pointer"
                                onClick={() => {
                                    onSortChange(otherOptions[index].value)
                                    setIsOpen(false)
                                }}
                            >
                                {options.label}
                            </button>
                        )}

                    </div>

                )
                }
            </div>
        </div >
    )
}

