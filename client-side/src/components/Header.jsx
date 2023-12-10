"use client";

import { useRouter } from "next/navigation";

export default function Header({ 'dest-page': page, 'header': header }){
    const router = useRouter();

    return (
        <div className="header-container">
            <h1>{header}</h1>
            <button onClick={(event) => {
                event.preventDefault();

                router.push(`/${page}`);
            }}>View more</button>
        </div>
    );
}