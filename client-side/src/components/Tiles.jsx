"use client";

import { useRouter } from "next/navigation";

export default function Tiles(){
    const tile_names = ['Mechanical', 'Civil', 'Electrical', 'Structural'];
    const router = useRouter();

    const tile_arr = tile_names.map((value, index) => {
        return (
            <div className="layout" onClick={() => {
                router.push(`/services/${value}`);
            }}>
                <div className="tile" key={index}>
                    <div className="content">
                        <span>{value}</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="tiles-container">
            {tile_arr}
        </div>
    );
}