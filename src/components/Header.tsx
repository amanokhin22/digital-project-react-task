import styles from "../styles/header.module.scss";
import logo from "../assets/img/logo.svg";
import close from "../assets/img/close.svg";
import burgerMenu from "../assets/img/burgerMenu.svg";
import {useEffect, useState} from "react";

export const Header = () => {
    const [colorAfterScroll, setColorAfterScroll] = useState(false);
    const [burgerOpened, setBurgerOpened] = useState(false);
    useEffect(() => {
        const changeColorBtn = () => {
            if (window.scrollY >= 50) {
                setColorAfterScroll(true)
            } else {
                setColorAfterScroll(false)
            }
        }
        window.addEventListener('scroll', changeColorBtn)
        return () => window.removeEventListener('scroll', changeColorBtn)
    }, [])

    return (
        <header
            className={styles.header_container + " " + (burgerOpened ? styles.headerBgBurger : "") + " " + (colorAfterScroll ? styles.header_containerBG : "")}>
            <div className={styles.header_mainCon}>
                <div
                    className={burgerOpened ? styles.header_mobile + " " + styles.header_mobile_Show : styles.header_mobile}>
                    <div className={styles.logo_top}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={burgerOpened ? styles.navbar + " " + styles.navbarShow : styles.navbar}>
                        <li>ГЛАВНАЯ</li>
                        <li>ГАЛЕРЕЯ</li>
                        <li>ПРОЕКТЫ</li>
                        <li>СЕРТИФИКАТЫ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </div>
                <span
                    className={styles.burger} onClick={() => setBurgerOpened(!burgerOpened)}
                >
                    {burgerOpened
                        ? <img src={close} alt={close}/>
                        : <img src={burgerMenu} alt={burgerMenu}/>}
                </span>
            </div>
        </header>
    )
}
