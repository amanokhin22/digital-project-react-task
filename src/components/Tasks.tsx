import styles from "../styles/tasks.module.scss";

import one from "../assets/img/one.svg";
import two from "../assets/img/two.svg";

export const Tasks = () => {
    return (
        <section className={styles.tasks_section}>
            <div className={styles.tasks_container}>
                <h1 className={styles.title}> Основные задачи </h1>
                <div className={styles.tasks_blocks}>
                    <div className={styles.block}>
                        <img src={one} alt="number one"/>
                        <span className={styles.description}>Создание комфортных условий и повышение
                            качества обслуживания клиентов</span>
                    </div>
                    <div className={styles.block}>
                        <img src={two} alt="number one"/>
                        <span className={styles.description}>Постоянно совершенствовать качество предоставляемых услуг
                            путем обучения персонала, закупки нового оборудования и
                            усиленной рекламы на рынке</span>
                    </div>
                </div>
            </div>
        </section>
    )
}