

export default function Navbar() {
    return (
        <header className="bg-indigo-600">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                        </a>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="/profile"
                            className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Profile
                        </a>
                        <a
                            href="/api/auth/logout"
                            className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
