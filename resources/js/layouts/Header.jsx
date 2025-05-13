import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-16
                bg-neutral-900
                flex justify-center items-center
                rounded-b-xl
                space-x-7">
                    <Link className="
                    h-10 w-38
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:bg-opacity-50% hover:bg-neutral-100" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-10 w-38
                    mr-10
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:bg-opacity-50% hover:bg-neutral-100" href="/projects">
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
