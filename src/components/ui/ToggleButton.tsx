import { clsx } from "clsx"
import * as React from "react"
import { ButtonHTMLAttributes } from "react"

import Button from "../ui/Button"


interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean
    onChange: () => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive, onChange, ...props  }) => {
    return (
        <Button
            buttonType={'button'}
            className={clsx(
                "w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer",
                isActive ? "bg-red-700" : "bg-gray-300"
            )}
            onClick={onChange}
            {...props}
        >
            <div
                className={clsx(
                    "bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300",
                    isActive ? "translate-x-8" : "translate-x-0"
                )}
            />
        </Button>
    )
}

export default ToggleButton
