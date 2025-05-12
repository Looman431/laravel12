import React from 'react';

export default function Header({children}: { children: React.ReactNode }){
    return (
        <>
            <header>
                <nav className="h-18
                bg-neutral-900
                flex justify-center items-center
                rounded-b">
                    <button className="
                    h-10 w-25
                    bg-linear-to-tr from-cyan-500 to-blue-500 rounded text-black text-sm font-bold
                    transform transition-all hover:text-white hover:cursor-pointer">
                        Профиль
                    </button>

                    <button className="
                    h-10 w-25
                    mr-10
                    bg-linear-to-br from-blue-500 to-cyan-500 rounded text-black text-sm font-bold
                    transform transition-all hover:text-white hover:cursor-pointer">
                        Проекты
                    </button>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
