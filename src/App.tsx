import {useEffect, useState} from 'react'
import {
    getExtensionItems,
    changeStatus,
    deleteExtensionItem,
    ExtentionItem
} from "./data/data";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar.jsx";
import Footer from "./layouts/Footer.jsx"
import Card from "./components/Card";
import Modal from "./components/Modal.jsx";


function App() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [status, setStatus] = useState<boolean | null>(null)
    const [item, setItem] = useState<ExtentionItem>(null)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    const handleChangeStatus = (item: ExtentionItem) => {
      changeStatus(item)
        setData(getExtensionItems(status))
    }

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme)
    }

    useEffect(() => {
        const items = getExtensionItems()
        setData(items)

        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <div
        className="bg-[linear-gradient(180deg,#EBF2FC_0%,#EEF8F9_100%)] dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)] min-h-screen bg-cover bg-no-repeat pt-4"
    >
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Navbar setData={setData} status={status} setStatus={setStatus}/>
        <main className="m-9 2xl:mx-auto max-w-360 mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3 transition-all">
            {data.map((item, index) => (
                <Card item={item} handleChangeStatus={handleChangeStatus} setOpen={setOpen} setItem={setItem} />
            ))}
        </main>
        <Modal open={open} setOpen={setOpen} item={item} status={status} setData={setData} />
        <Footer />
    </div>
  )
}

export default App
