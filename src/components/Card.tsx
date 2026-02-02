import ToggleButton from "./ui/ToggleButton"
import {useState} from "react";


const Card = ({ item, handleChangeStatus, setOpen, setItem }) => {
    const handleOpenModal = () => {
        setOpen(true)
        setItem(item)
    }

    return (
        <div key={item.id}
             className="bg-white rounded-2xl px-5 pt-4 pb-5 shadow-md flex flex-col justify-between gap-10 border-neutral-600 transition">
            <div className="flex flex-row gap-5">
                <img className="size-15" src={item.logo} alt={`logo ${item.name}`}/>
                <div>
                    <h3 className="text-xl font-extrabold text-neutral-900">{item.name}</h3>
                    <p className="text-[18px]">{item.description}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button
                    className="rounded-full border border-neutral-600 px-4 pt-1 pb-1 text-[20px]
                    text-neutral-900 cursor-pointer hover:bg-(--red-700) hover:text-(--neutral-0)"
                    onClick={() => handleOpenModal()}
                >
                    Remove
                </button>
                <ToggleButton isActive={item.isActive} onChange={() => handleChangeStatus(item)}/>
            </div>
        </div>
    )
}

export default Card