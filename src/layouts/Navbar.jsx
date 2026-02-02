import clsx from "clsx"
import {getExtensionItems} from "../data/data"


const Navbar = ({ setData, status, setStatus }) => {
    const handleChangeView = (status) => {
        if (status === null) {
            setData(getExtensionItems())
        } else {
            setData(getExtensionItems(status))
            setStatus(status)
        }
    }

    return (
        <nav className="md:flex md:flex-row md:justify-between md:items-center md:mx-9 md:mt-10 md:mb-5 text-(--neutral-900) font-bold m-4 2xl:mx-auto max-w-360">
            <h1 className="text-center dark:text-(--neutral-0) text-3xl mt-10 mb-5 md:mt-0 md:mb-0">Extensions List</h1>

            <div className="flex flex-row gap-1.5 items-center justify-center">
                <button
                    className={clsx(
                        "btn",
                        typeof status != 'boolean' && "active"
                    )}
                    onClick={() => handleChangeView()}
                >
                    All
                </button>
                <button
                    className={clsx(
                        "btn",
                        status && "active"
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