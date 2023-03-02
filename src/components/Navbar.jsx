import Image from "next/image";
import {BsSearch} from "react-icons/bs";
import { IconContext } from "react-icons";
import style from '@/styles/Navbar.module.scss';

const Navbar = () => {
    return(
        <IconContext.Provider value={{ className: style.icon }}>
            <header className={style.container}>
                <Image src='/netflix-logo.png' alt="Netflix" width={126} height={40}/>
                <BsSearch/>
            </header>
        </IconContext.Provider>
    )
}
export default Navbar;