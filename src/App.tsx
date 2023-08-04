import React from "react";
import styles from "./app-container.module.scss";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {SwiperComponent} from "./components/Swiper";
import {About} from "./components/About";
import {Tasks} from "./components/Tasks";
import {Projects} from "./components/Projects";
import {Form} from "./components/Form";

function App() {
    return (
        <div className={styles.app_container}>
            <Header/>
            <main>
                <SwiperComponent/>
                <About/>
                <Tasks/>
                <Projects/>
                <Form/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
