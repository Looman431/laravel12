import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="h-25
                bg-neutral-950/75
                flex justify-center items-center
                rounded-b-xl
                space-x-7">
                    <Link className="
                    h-14 w-32
                    flex items-center content-center justify-center
                    bg-neutral-950/50 rounded-md text-white text-lg font-semibold
                    border-b-4 border-black/70
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:opacity-10" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-14 w-32
                    mr-10
                    flex items-center content-center justify-center
                    bg-neutral-950/50 rounded-md text-white text-lg font-semibold
                    border-b-4 border-black/70
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:opacity-10" href="/projects">
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
