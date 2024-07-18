import LayoutUser from "../Layouts/LayoutUser/LayoutUser";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "@inertiajs/react";
import SvgImage from "../Component/ImageSvg";

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
                                <div className="product-item">
                                    <Link href="detail.html">
                                        <div className="product-top">
                                            <div className="product-item-img">
                                                <img
                                                    src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="product-bottom">
                                            <div className="product-item-bottom">
                                                <div className="product-item-name line-champ-2">
                                                    Nhẫn vàng{" "}
                                                </div>
                                                <div className="product-item-price">
                                                    <Link href="detail.html">
                                                        100.200.000 VNĐ
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="buy-product">
                                                <Link
                                                    className="btn-product btn-product-buy"
                                                    href=""
                                                >
                                                    Mua ngay
                                                </Link>
                                                <Link className="btn-product btn-product-heart">
                                                    <i className="fa-regular fa-heart"></i>
                                                </Link>
                                                <Link className="btn-product btn-product-cart">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
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
