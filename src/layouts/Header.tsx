const Header = ({ theme, toggleTheme }) => {
    return (
        <div
            className="bg-white dark:bg-(--neutral-700) mx-9 mb-4 p-4 2xl:mx-auto max-w-360 flex flex-row items-center justify-between space-between rounded-2xl">
            <div>
                {theme === 'light' ? (<img src="/assets/images/logo.svg" alt="logo website" />) : (<img src="/assets/images/logo-dark.svg" alt="logo website" />)}
            </div>
            <div
                className="bg-neutral-200 dark:bg-(--neutral-600) p-3 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-xl cursor-pointer hover:bg-(--neutral-300)"
                onClick={toggleTheme}
            >
                {theme === 'light' ? (<img src="/assets/images/icon-moon.svg" alt="logo website" />) : (<img src="/assets/images/icon-sun.svg" alt="moon sun"/>)}
            </div>
        </div>
    )
}

export default Header