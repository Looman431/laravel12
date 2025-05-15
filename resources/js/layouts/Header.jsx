import React from 'react';
import { Link } from '@inertiajs/react';
import { FaTools } from "react-icons/fa";

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-24
                rounded-b-2xl
                bg-[#1F1F1F]
                flex justify-center items-center
                font-mono font-semibold
                space-x-10">
                    <Link className="
                    flex items-center" href="/">
                        <FaTools className="
                        h-6 w-6" />
                        <h1>Creators</h1>
                    </Link>
                    <Link className="
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="">
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
