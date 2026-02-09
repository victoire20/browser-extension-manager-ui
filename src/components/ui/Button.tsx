import * as React from "react"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: "button" | "submit" | "reset"
    className?: string
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ buttonType, className, children, type, ...props }) => {
    const resolvedType = (type as "button" | "submit" | "reset") ?? buttonType ?? "button"

    return (
        <button
            type={resolvedType}
            className={className}
            {...props}
            title={'button'}
        >
            {children}
        </button>
    )
}

export default Button