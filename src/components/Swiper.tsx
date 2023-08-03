import styles from "../styles/swiper.module.scss";
import {useRef, useState} from "react";
// @ts-ignore
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType, Navigation, Pagination, A11y} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import boxBuilding from "../assets/img/boxBuilding.jpg";
import buildings from "../assets/img/buildings.jpg";
import shapearrow from "../assets/img/shapearrow.svg";
import {Link} from "react-router-dom";

export interface slidesItems {
    designationImage: string;
}

export const slides: slidesItems[] = [
    {
        designationImage: boxBuilding,
    },
    {
        designationImage: buildings,
    },
];

const CustomPagination = ({currentIndex, totalSlides}: any) => {
    const formattedIndex = String(currentIndex + 1).padStart(2, "0");
    const formattedTotal = String(totalSlides).padStart(2, "0");

    return (
        <div className={styles.customPagination}>
            {formattedIndex} / {formattedTotal}
        </div>
    );
};

export const SwiperComponent = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const swiperNavRef = useRef<SwiperType | null>(null);

    const handleSlideChange = () => {
        setCurrentIndex(swiperNavRef.current?.realIndex || 0);
    };

    return (
        <div className={styles.swiper_container}>
            <div className={styles.left_container}>
                <div className={styles.swiper_title}>
                    <span className={styles.swiper_title_firstWord}>PROJECT</span>
                    <span className={styles.swiper_title_secondWord}>HOME</span>
                </div>
                <div className={styles.swiperNav}>
                    <div
                        className={`${styles.swiperNavPrev}`}
                        onClick={() => swiperNavRef.current?.slidePrev()}
                    ></div>
                    <div
                        className={`${styles.swiperNavNext}`}
                        onClick={() => swiperNavRef.current?.slideNext()}
                    ></div>
                </div>
                <CustomPagination
                    currentIndex={currentIndex}
                    totalSlides={slides.length}
                />
            </div>
            <div className={styles.swiperWrapper}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    loop={true}
                    navigation={false}
                    speed={0}
                    onBeforeInit={(swiper: SwiperType | null) => {
                        swiperNavRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.image}
                                        src={slide.designationImage}
                                        alt="buildings"
                                    />
                                </div>
                            </div>

                            <button className={styles.look_btn}>
                                <Link to={'https://www.siemens.com/global/en.html'}>
                                ВЗГЛЯНУТЬ
                                    <img src={shapearrow} alt="arrow"/>
                                </Link></button>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
