import LayoutUser from "../Layouts/LayoutUser/LayoutUser";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Home() {
    return (
        <section
            className="product-list-show product-store position-relative padding-large no-padding-top"
            id="product-news"
        >
            <div className="container">
                <div className="row">
                    <div className="product-section">
                        <h3 className="h3-product-section">Sản phẩm mới</h3>
                        <span>
                            <a href="shop.html">Đi đến shop</a>
                        </span>
                    </div>
                    <Swiper
                        className="mySwiper product-swiper"
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        slidesPerView={3}
                    >
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="product-item">
                                <a href="detail.html">
                                    <div class="product-top">
                                        <div class="product-item-img">
                                            <img
                                                src="images/nhan-cuoi-kim-cuong-pnj-chung-doi-vang-18k.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="product-bottom">
                                        <div class="product-item-bottom">
                                            <div class="product-item-name line-champ-2">
                                                Nhẫn vàng{" "}
                                            </div>
                                            <div class="product-item-price">
                                                <a href="detail.html">
                                                    100.200.000 VNĐ
                                                </a>
                                            </div>
                                        </div>
                                        <div class="buy-product">
                                            <a
                                                class="btn-product btn-product-buy"
                                                href=""
                                            >
                                                Mua ngay
                                            </a>
                                            <a class="btn-product btn-product-heart">
                                                <i class="fa-regular fa-heart"></i>
                                            </a>
                                            <a class="btn-product btn-product-cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

Home.layout = (page) => <LayoutUser children={page} />;

export default Home;
