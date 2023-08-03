import React from "react";
import styles from  "./app-container.module.scss";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {SwiperComponent} from "./components/Swiper";

function App() {
  return (
    <div className={styles.app_container}>
      <Header/>
        <section>
            <SwiperComponent/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
