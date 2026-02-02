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

    const handleChangeStatus = (item: ExtentionItem) => {
      changeStatus(item)
        if (status === null) {
            setData(getExtensionItems())
        } else {
            setData(getExtensionItems(status))
        }
    }

    useEffect(() => {
        const items = getExtensionItems()
        setData(items)
    }, [])

  return (
    <>
        <Header />
        <Navbar setData={setData} status={status} setStatus={setStatus}/>
        <main className="m-4 2xl:mx-auto max-w-360 mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3 transition-all">
            {data.map((item, index) => (
                <Card item={item} handleChangeStatus={handleChangeStatus} setOpen={setOpen} setItem={setItem} />
            ))}
        </main>
        <Modal open={open} setOpen={setOpen} item={item} status={status} setData={setData} />
        <Footer />
    </>
  )
}

export default App
