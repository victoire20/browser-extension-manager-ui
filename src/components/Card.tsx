import ToggleButton from "./ui/ToggleButton";
import * as React from "react";
import { useState } from "react";

interface Item {
    id: number | string;
    name: string;
    description: string;
    logo: string;
    isActive: boolean;
}

interface CardProps {
    item: Item;
    onToggle: (item: Item) => void;
    onDeleteRequest: (item: Item) => void;
    isExiting?: boolean;
}

const Card: React.FC<CardProps> = ({ item, onToggle, onDeleteRequest, isExiting = false }) => {
    return (
        <div
            className={`bg-white rounded-2xl px-5 pt-4 pb-5 shadow-md flex flex-col justify-between gap-10
      border-neutral-600 transition-all duration-300 dark:bg-(--neutral-700) dark:border-neutral-0
      ${isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
            <div className="flex flex-row gap-5">
                <img
                    className="size-15"
                    src={item.logo}
                    alt={`logo ${item.name}`}
                />
                <div>
                    <h2 className="text-xl font-extrabold text-neutral-900 mb-1 dark:text-(--neutral-0)">
                        {item.name}
                    </h2>
                    <p className="text-[18px] dark:text-(--neutral-0) dark:opacity-70">
                        {item.description}
                    </p>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <button
                    className="rounded-full border border-neutral-600 px-4 pt-1 pb-1 text-[20px] text-neutral-900 cursor-pointer
          hover:bg-(--red-700) hover:text-(--neutral-0)
          dark:text-(--neutral-0) dark:border-(--neutral-600)
          dark:hover:text-(--neutral-900) dark:hover:font-bold"
                    onClick={() => onDeleteRequest(item)}
                >
                    Remove
                </button>

                <ToggleButton
                    isActive={item.isActive}
                    onChange={() => onToggle(item)}
                />
            </div>
        </div>
    );
};

export default Card;
