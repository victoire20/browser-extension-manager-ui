const Header = () => {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
        //body.classList.toggle("dark")
    }

    return (
        <div
            className="bg-white m-4 p-4 2xl:mx-auto max-w-360 flex flex-row items-center justify-between space-between rounded-2xl">
            <div><img src="/assets/images/logo.svg" alt="logo website"/></div>
            <div
                className="bg-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-xl cursor-pointer hover:bg-(--neutral-300)"
                onClick={() => toggleDarkMode}
            >
                <img src="/assets/images/icon-moon.svg" alt="moon icon"/>
            </div>
        </div>
    )
}

export default Header