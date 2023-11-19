"use client";

export default function Tiles(){
    const tile_names = ['Mechanical', 'Civil', 'Electrical', 'Structural'];

    const tile_arr = tile_names.map((value, index) => {
        return (
            <div className="tile" key={index}>
                <span>{value}</span>
            </div>
        );
    })

    return (
        <div className="tiles-container">
            {tile_arr}
        </div>
    );
}