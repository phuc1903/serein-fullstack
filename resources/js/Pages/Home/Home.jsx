import LayoutUser from "@/Layouts/LayoutUser/LayoutUser";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import clsx from "clsx";
import styles from './HomeStyle.module.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "@inertiajs/react";
import SvgImage from "@/Component/ImageSvg";
import Product from "@/Component/Product";

function Home() {
    return (
        <>
            <SvgImage/>

            <section
                className="product-list-show product-store position-relative padding-large no-padding-top"
                id="product-news"
            >
                <div className="container">
                    <div className="row">
                        <div className="product-section">
                            <h3 className="h3-product-section">Sản phẩm mới</h3>
                            <span>
                                <Link href="shop.html">Đi đến shop</Link>
                            </span>
                        </div>
                        <Swiper
                            className="mySwiper product-swiper"
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            slidesPerView={4}
                        >
                            <SwiperSlide>
                                <Product data={{title: "phucs", price: "200"}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product data={{title: "phucs", price: "200"}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product data={{title: "phucs", price: "200"}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product data={{title: "phucs", price: "200"}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Product data={{title: "phucs", price: "200"}}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

Home.layout = (page) => <LayoutUser children={page} />;

export default Home;
