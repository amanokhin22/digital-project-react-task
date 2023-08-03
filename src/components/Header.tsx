import styles from "../styles/header.module.scss";
import logo from "../assets/img/logo.svg";
import {useEffect, useState} from "react";

export const Header = () => {
    const [colorAfterScroll, setColorAfterScroll] = useState(false);

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
        <header className={styles.header_container + " " + (colorAfterScroll ? styles.header_containerBG : "")}>
            <div className={styles.header_mainCon}>
                <div className={styles.header_mobile}>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={styles.navbar}>
                        <li>ГЛАВНАЯ</li>
                        <li>ГАЛЕРЕЯ</li>
                        <li>ПРОЕКТЫ</li>
                        <li>СЕРТИФИКАТЫ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}