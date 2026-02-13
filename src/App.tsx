import { useEffect, useMemo, useState } from "react"
import { getExtensionItems, toggleExtensionStatus, deleteExtensionItem } from "./data/data"
import type { ExtensionItem } from "./types/extension"

import Header from "./layouts/Header"
import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"
import Card from "./components/Card"
import Modal from "./components/Modal"

function App() {
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ExtensionItem | null>(null)
    const [refreshKey, setRefreshKey] = useState(0)
    const [exitingIds, setExitingIds] = useState<Set<number>>(new Set())

    const [status, setStatus] = useState<boolean | null>(() => {
        const saved = localStorage.getItem("status")
        if (saved === null || saved === "null") return null
        return saved === "true"
    })

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme")
        return saved === "dark" ? "dark" : "light"
    })

    const data = useMemo(
        () => getExtensionItems(status),
        [status, refreshKey]
    )

    // 🔹 Toggle extension active/inactive
    const handleToggleStatus = (id: number) => {
        // Only animate if the status filter will cause the card to disappear
        const shouldAnimate = status !== null
        
        if (shouldAnimate) {
            // Mark the card as disappearing
            setExitingIds((prev: any) => new Set(prev).add(id))
            
            // Wait until the animation has finished before updating the data
            setTimeout(() => {
                toggleExtensionStatus(id)
                setRefreshKey(prev => prev + 1)
                setExitingIds((prev: any) => {
                    const newSet = new Set(prev)
                    newSet.delete(id)
                    return newSet
                })
            }, 300) // Match the transition duration (duration-300)
        } else {
            // No animation needed when showing all items
            toggleExtensionStatus(id)
            setRefreshKey(prev => prev + 1)
        }
    }

    // 🔹 Delete extension
    const handleDelete = (item: ExtensionItem) => {
        // Mark the card as disappearing
        setExitingIds((prev: any) => new Set(prev).add(item.id))
        
        // Wait until the animation has finished before updating the data
        setTimeout(() => {
            deleteExtensionItem(item.id)
            setRefreshKey(prev => prev + 1)
            setExitingIds((prev: any) => {
                const newSet = new Set(prev)
                newSet.delete(item.id)
                return newSet
            })
            setOpen(false)
        }, 300) // Match the transition duration (duration-300)
    }

    // 🔹 Persist filter
    useEffect(() => {
        localStorage.setItem("status", String(status))
    }, [status])

    // 🔹 Theme handling
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    return (
        <div className="bg-[linear-gradient(180deg,#EBF2FC_0%,#EEF8F9_100%)]
        dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)] min-h-screen bg-cover bg-no-repeat pt-4">

            <Header toggleTheme={toggleTheme} theme={theme} />

            <Navbar status={status} setStatus={setStatus} />

            <main className="m-9 lg:mx-auto max-w-5xl mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {data.map(item => (
                    <Card
                        key={item.id}
                        item={item}
                        onToggle={() => handleToggleStatus(item.id)}
                        onDeleteRequest={(item) => {
                            setSelectedItem(item)
                            setOpen(true)
                        }}
                        isExiting={exitingIds.has(item.id)}
                    />
                ))}
            </main>

            {open && (
                <Modal
                    open={open}
                    setOpen={setOpen}
                    item={selectedItem}
                    onDelete={handleDelete}
                />
            )}

            <Footer />
        </div>
    )
}

export default App
