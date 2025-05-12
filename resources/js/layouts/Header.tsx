import React from 'react';

export default function Header({children}: { children: React.ReactNode }){
    return (
        <>
            <header>
                <nav className="h-15 bg-neutral-900 items-center">
                    <button className="
                    h-7 w-15
                    bg-linear-to-tr from-cyan-500 to-blue-500 rounded text-black
                    transform transition-all hover:bg-black hover:text-white">
                        Профиль
                    </button>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
