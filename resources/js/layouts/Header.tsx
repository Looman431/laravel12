import React from 'react';

export default function Header({children}: { children: React.ReactNode }){
    return (
        <>
            <header>
                <nav>
                    <h1 className="h-15 bg-neutral-800">dww</h1>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
