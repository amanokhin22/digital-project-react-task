import styles from "../styles/about.module.scss";
import {Link} from "react-router-dom";
import shapearrow from "../assets/img/shapearrow.svg";
import firstWindow from "../assets/img/firstWindow.png";
import secWindow from "../assets/img/secWindow.png";
import thirdWindow from "../assets/img/thirdWindow.png";

export const About = () => {
    return (
        <section className={styles.about_main}>
            <div className={styles.about_container}>
                <div className={styles.image_container}>
                    <div className={styles.left_images_container}>
                        <img className={styles.first_image} width={270} height={265} src={firstWindow} alt="images"/>
                        <img className={styles.second_image} width={270} height={140} src={secWindow} alt="images"/>
                    </div>
                    <img className={styles.third_image} width={270} height={345} src={thirdWindow} alt="images"/>
                </div>
                <div className={styles.txt_block}>
                    <h2 className={styles.title}> О компании </h2>
                    <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button className={styles.look_btn}>
                        <Link to={'https://www.siemens.com/global/en.html'}>
                            ЧИТАТЬ
                            <img src={shapearrow} alt="arrow"/>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
