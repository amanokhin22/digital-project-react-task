import styles from "../styles/form.module.scss";
import whiteArrow from "../assets/img/whiteArrow.svg";
import connect from "../assets/img/connect.jpg";

export const Form = () => {
    return (
        <section className={styles.form_main}>
            <div className={styles.form_container}>
                <h1 className={styles.title}>
                    Связаться с нами
                </h1>
                <div className={styles.block}>
                    <form className={styles.modalForm}>
                        <label className={styles.FormInputStyled}>
                            <input
                                type="text"
                                placeholder="Имя"
                                className={styles.formInput}
                            />
                        </label>
                        <label className={styles.FormInputStyled}>
                            <input
                                type="tel"
                                placeholder="Номер телефона*"
                                className={styles.formInput}
                            />
                        </label>
                        <label className={styles.FormInputStyled}>
                            <input
                                type="email"
                                placeholder="E-mail*"
                                className={styles.formInput}
                            />
                        </label>
                        <label className={styles.FormInputStyled}>
                            <input
                                type="text"
                                placeholder="Интересующий товар/услуга"
                                className={styles.formInput}
                            />
                        </label>
                        <label className={styles.FormInputStyled}>
                            <input
                                type="text"
                                placeholder="Сообщение*"
                                id="text"
                                className={styles.formInputLast}
                            />
                        </label>
                        <span className={styles.confidentiality}>Отправляя заявку Вы соглашаетесь с политикой конфиленциальности</span>
                        <button className={styles.formFillingButton}>
                            Отправить
                            <img src={whiteArrow} alt="arrow"/>
                        </button>
                    </form>
                    <div>
                        <img width={780} height={370} src={connect} alt="connect"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
