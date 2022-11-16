import { useState } from "react";

const Header = () => {
    const [title, setTitle] = useState('PornHub');
    const changeTitle = () => {
        setTitle('Djamet coder')
    }
    return (
        <div>
            <h1>Hallo selamat datang di {title}</h1>
            <button onClick={changeTitle}>Ganti judul</button>
        </div>
    )
}

export default Header;