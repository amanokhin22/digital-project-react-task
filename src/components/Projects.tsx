import styles from "../styles/projects.module.scss";

import whiteArrow from "../assets/img/whiteArrow.svg";
import wheelHouse from "../assets/img/wheelHouse.jpg";
import stadium from "../assets/img/stadium.jpg";
import neighborhood from "../assets/img/neighborhood.jpg";
import park from "../assets/img/park.jpg";
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <section className={styles.projects_main}>
            <div className={styles.projects_container}>
                <h1 className={styles.title}>Наши проекты</h1>
                <div>
                    <div className={styles.first_image_container}>
                        <div className={styles.first_image}>
                            <span className={styles.title_image}>ДОСУГОВЫЙ ЦЕНТР</span>
                            <Link className={styles.link_image}
                                  to={"https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_culturalcenter.html"}>
                                <button className={styles.projects_btn}>ПОДРОБНЕЕ
                                    <img src={whiteArrow} alt="arrow"/>
                                </button>
                            </Link>
                        </div>
                        <img width={570} height={255} src={wheelHouse} alt="wheelHouse"/>
                    </div>
                    <div className={styles.second_image_container}>
                        <img width={270} height={255} src={stadium} alt="stadium"/>
                        <img width={470} height={255} src={neighborhood} alt="neighborhood"/>
                        <img width={370} height={255} src={park} alt="park"/>
                    </div>
                </div>
                <Link className={styles.link_images}
                      to={"https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_culturalcenter.html"}>
                    <button className={styles.btn_to_projects}>ВСЕ ПРОЕКТЫ
                        <img src={whiteArrow} alt="arrow"/>
                    </button>
                </Link>
            </div>
        </section>
    )
}
