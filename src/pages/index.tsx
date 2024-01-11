import Link from "next/link";
import React from "react";

const MainLayout = () => {
    return (
        <div>
            <nav>
                <li>
                    <ul>
                        <Link href="/home"> Home </Link>
                    </ul>
                    <ul>
                        <Link href="/assets"> Assets </Link>
                    </ul>
                    <ul>
                        <Link href="/drivers"> Drivers </Link>
                    </ul>
                </li>
            </nav>
        </div>
    )
}

export default MainLayout;