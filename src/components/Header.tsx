export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6">
            <img
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl"
                src="me.jpg"
                alt="uhmm yeah"
            />

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h1 className="text-[var(--primary-text)] text-xl sm:text-2xl md:text-3xl font-medium">
                    neos :)
                </h1>

                <nav className="flex text-xs sm:text-sm md:text-base gap-3 sm:gap-4 mt-2 text-[var(--secondary-text)]">
                    <a
                        href="/"
                        className="hover:text-white hover:underline transition-colors duration-200"
                    >
                        home
                    </a>
                    <span className="text-[var(--secondary-text)]">|</span>
                    <a
                        href="/about"
                        className="hover:text-white hover:underline transition-colors duration-200"
                    >
                        about
                    </a>
                    <span className="text-[var(--secondary-text)]">|</span>
                    <a
                        href="/more"
                        className="hover:text-white hover:underline transition-colors duration-200"
                    >
                        coming soon ..
                    </a>
                </nav>
            </div>
        </header>
    );
}