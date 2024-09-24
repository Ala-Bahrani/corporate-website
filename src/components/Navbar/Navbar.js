import { useState } from 'react';
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import Container from '../Container/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
    return (


       <div className={styles.menu}>
        <div onClick={toggleMenu} className={styles.menuIcon}>
            <FontAwesomeIcon icon={faBars}  className={`${styles.menuBarsIcon} ${isOpen ? styles.closeIcon : ''}`}/>
            <FontAwesomeIcon icon={faXmark}  className={`${styles.menuBarsIcon} ${isOpen ? styles.rotate : styles.closeIcon}`}/>
        </div>
         <nav className={`${styles.navMenu} ${isOpen ? styles.openMenu : ''}`}>
            <ul className={styles.navlinks}>
                <li>
                    <a href="#home">صفحه اصلی</a>
                </li>
                <li>
                    <a href="#about">درباره ما </a>
                </li>
                <li>
                    <a href="#projects">پروژه ها </a>
                </li>
                <li>
                    <a href="#services">خدمات </a>
                </li>
                <li>
                    <a href="#blog">بلاگ </a>
                </li>
                <li>
                    <a href="#contact">تماس با ما </a>
                </li>
            </ul>
        </nav>
       </div>

    )
}

export default Navbar;