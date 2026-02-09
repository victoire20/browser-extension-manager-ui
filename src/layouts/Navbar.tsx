import { clsx } from "clsx"
import * as React from "react";

interface NavbarProps {
    status: boolean | null
    setStatus: React.Dispatch<React.SetStateAction<boolean | null>>
}

const Navbar: React.FC<NavbarProps> = ({ status, setStatus }) => {

    const handleChangeView = (value: boolean | null) => {
        setStatus(value)
    }

    return (
        <nav className="md:flex md:flex-row md:justify-between md:items-center md:mx-9 md:mt-10 md:mb-5 text-(--neutral-900) font-bold m-4 lg:mx-auto max-w-5xl">
            <h1 className="text-center dark:text-(--neutral-0) text-3xl mt-10 mb-5 md:mt-0 md:mb-0">
                Extensions List
            </h1>

            <div className="flex flex-row gap-1.5 items-center justify-center">
                <button
                    className={clsx(
                        "btn",
                        status === null && "active"
                    )}
                    onClick={() => handleChangeView(null)}
                >
                    All
                </button>

                <button
                    className={clsx(
                        "btn",
                        status === true && "active"
                    )}
                    onClick={() => handleChangeView(true)}
                >
                    Active
                </button>

                <button
                    className={clsx(
                        "btn",
                        status === false && "active"
                    )}
                    onClick={() => handleChangeView(false)}
                >
                    Inactive
                </button>
            </div>
        </nav>
    )
}

export default Navbar