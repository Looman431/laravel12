import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-24
                rounded-b-2xl
                bg-[#1F1F1F]
                flex justify-center items-center
                font-medium
                space-x-10">
                    <Link className="
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="/" >
                        Creators
                    </Link>

                    <Link className="
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="/dashboard">
                                Профиль
                    </Link>

                    <Link className="
                    mr-10
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="/projects">
                        Проекты
                    </Link>

                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
