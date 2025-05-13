import React from 'react';
import { Link } from '@inertiajs/react';
import { FaTools } from "react-icons/fa";

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-16
                bg-neutral-900
                flex justify-center items-center
                rounded-b-2xl
                space-x-7">
                    <FaTools>
                        Creators
                    </FaTools>

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
