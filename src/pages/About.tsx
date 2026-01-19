export default function About() {
    return (
        <div className="flex flex-col items-center sm:items-start p-4 sm:p-6 md:p-8">
            <div className="max-w-2xl space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                    <p className="text-base sm:text-lg md:text-xl text-[var(--primary-text)] font-medium">
                        More about me
                    </p>

                    <p className="text-sm sm:text-base text-[var(--secondary-text)]">
                        BCA student passionate about understanding how technology works at a fundamental level.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--primary-text)] mb-4 pb-2 border-b border-[var(--secondary-text)]">
                        Academic Journey
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--primary-text)]"></div>
                            <p className="text-sm sm:text-base text-[var(--primary-text)]">
                                <span className="font-semibold">3rd Sem:</span> Object-Oriented Programming with Java
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--primary-text)]"></div>
                            <p className="text-sm sm:text-base text-[var(--primary-text)]">
                                <span className="font-semibold">4th Sem:</span> Web Development + MySQL Database Project
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--primary-text)]"></div>
                            <p className="text-sm sm:text-base text-[var(--primary-text)]">
                                <span className="font-semibold">5th Sem:</span> .NET Technology Fundamentals
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--primary-text)]"></div>
                            <p className="text-sm sm:text-base text-[var(--primary-text)]">
                                <span className="font-semibold">6th Sem:</span> Advanced Java, Mobile Programming, Network Programming, React + Spring Boot Project
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--primary-text)] mb-4 pb-2 border-b border-[var(--secondary-text)]">
                        Interests & Passions
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-[var(--secondary-bg)] border border-[var(--secondary-text)] hover:border-[var(--primary-text)] transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">🐧</span>
                                <h3 className="text-[var(--primary-text)] font-bold text-sm sm:text-base">Linux & Systems</h3>
                            </div>
                            <p className="text-xs sm:text-sm text-[var(--secondary-text)]">
                                Exploring Linux distributions, system administration, and open-source tools
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--secondary-bg)] border border-[var(--secondary-text)] hover:border-[var(--primary-text)] transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">🔗</span>
                                <h3 className="text-[var(--primary-text)] font-bold text-sm sm:text-base">Networking</h3>
                            </div>
                            <p className="text-xs sm:text-sm text-[var(--secondary-text)]">
                                Understanding how the internet works, protocols, and network architectures
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-[var(--secondary-text)]">
                    <p className="text-sm sm:text-base text-[var(--primary-text)] text-center">
                        Always curious about how things work under the hood
                    </p>
                </div>
            </div>
        </div>
    );
}