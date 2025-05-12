import React from 'react';

export default function Header({children}: { children: React.ReactNode }){
    return (
        <>
            <header>
                <nav className="h-15 bg-neutral-900 flex justify-center items-center">
                    <button className="
                    h-10 w-20
                    bg-linear-to-tr from-cyan-500 to-blue-500 rounded text-black text-sm font-bold
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
