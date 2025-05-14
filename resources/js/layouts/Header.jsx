import React from 'react';
import { Link } from '@inertiajs/react';
import { FaTools } from "react-icons/fa";

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-16
                rounded-b-2xl
                bg-neutral-900
                flex justify-center items-center">
                    <Link>
                        <FaTools className="
                        h-6 w-6" />
                    </Link>

                    <Link className="flex items-center">
                        <h1 className="font-semibold">Creators</h1>
                    </Link>
                    <Link className="
                    h-10 w-38
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:backdrop-opacity-75 hover:bg-neutral-900/50" href="">
                                Профиль
                    </Link>

                    <Link className="
                    h-10 w-38
                    mr-10
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:bg-neutral-900/50" href="/projects">
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
