import styles from "../styles/footer.module.scss";

import logoBottom from "../assets/img/logoBottom.svg";
import place from "../assets/img/place.svg";
import phone from "../assets/img/phone.svg";
import mail from "../assets/img/mail.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";
import pininterest from "../assets/img/pininterest.svg";

import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.main}>
                <div className={styles.upper_block}>
                    <div className={styles.bottom_logo}>
                        <img src={logoBottom} alt="logoBottom"/>
                    </div>
                        <div className={styles.block}>
                            <span className={styles.block_title}>Информация</span>
                            <div className={styles.pages}>
                                <Link to="#"><span className={styles.block_part}>Главная</span></Link>
                                <Link to="#"><span className={styles.block_part}>Галерея</span></Link>
                                <Link to="#"><span className={styles.block_part}>Проекты</span></Link>
                                <Link to="#"><span className={styles.block_part}>Сертификаты</span></Link>
                                <Link to="#"><span className={styles.block_part}>Контакты</span></Link>
                            </div>
                        </div>
                        <div className={styles.contacts}>
                            <div className={styles.block}>
                                <span className={styles.block_title}>Контакты</span>
                                <div className={styles.little_block}>
                                <span>
                                    <img src={place} alt="place"/>
                                </span>
                                    <div className={styles.address}>
                                        <span className={styles.block_part}>100000, Республика  Казахстан,</span>
                                        <span className={styles.block_part}>г. Караганда, ул. Телевизионная 10</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.little_block}>
                                <span className={styles.block_part}><img src={phone} alt="phone"/></span>
                                <a href="tel:+380000000000" className={styles.block_part}>+38 (000) 000 00 00</a>
                            </div>
                            <div className={styles.little_block}>
                                <span className={styles.block_part}><img src={mail} alt="mail"/></span>
                                <a href="mailto:mail@gmail.com" className={styles.block_part}>mail@gmail.com</a>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.block_title}>Социальные сети</span>
                            <div className={styles.little_block}>
                                <Link to={"https://www.facebook.com/unitednations/"}>
                                    <img src={facebook} alt="facebook"/>
                                </Link>
                                <Link to={"https://twitter.com/UN"}>
                                    <img src={twitter} alt="twitter"/>
                                </Link>
                                <Link to={"https://www.linkedin.com/company/united-nations/about/"}>
                                    <img src={LinkedIn} alt="linkedIn"/>
                                </Link>
                                <Link to={"https://www.pinterest.com/unradioru/"}>
                                    <img src={pininterest} alt="pininterest"/>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.bottom_block}>© 2019 Digital Project. Все права защищены.</div>
        </footer>
    )
}
