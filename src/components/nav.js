import { useState } from "react";
const Nav = () => {
    const [produk] = useState([
        {id: 1, title: 'Indomie', value: 100},
        {id: 2, title: 'Mie Gelas', value: 100},
        {id: 3, title: 'RTX 4090', value: 100},
        {id: 4, title: 'IsoPlus', value: 190},
        {id: 5, title: 'StarBucks', value: 100},
    ])
    return (
        <div>
            <ul>
                {produk.map((item) =>(
                    <li key={item.id}>{item.title} Stock {item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;