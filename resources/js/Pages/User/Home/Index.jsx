import LayoutUser from "@/Layouts/LayoutUser/LayoutUser";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import clsx from "clsx";
import styles from "./HomeStyle.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "@inertiajs/react";
import SvgImage from "@/Component/ImageSvg";
import Product from "@/Component/Product";

function Home({ productNews, productBestsellers }) {
    return (
        <>
            <SvgImage />

            <section
                className="position-relative overflow-hidden bg-light-blue"
                id="billboard"
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <div className="banner-content">
                                        <h1 className="display-2 text-uppercase text-dark pb-5">
                                            Your Products Are Great.
                                        </h1>
                                        <a
                                            className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                                            href="shop.html"
                                        >
                                            Shop Product
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="image-holder">
                                        <img
                                            alt="banner"
                                            src="images/banner-image.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-md-6">
                                    <div className="banner-content">
                                        <h1 className="display-2 text-uppercase text-dark pb-5">
                                            Technology Hack You Won't Get
                                        </h1>
                                        <a
                                            className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                                            href="shop.html"
                                        >
                                            Shop Product
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="image-holder">
                                        <img
                                            alt="banner"
                                            src="images/banner-image.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="padding-large" id="company-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="cart-outline">
                                        <use xlinkHref="#cart-outline" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">
                                        miễn phí ship
                                    </h3>
                                    <p>Nhận mã miễn phí ship khi có ưu đãi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="quality">
                                        <use xlinkHref="#quality" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">
                                        Đảm bảo chất lượng
                                    </h3>
                                    <p>
                                        Sản phẩm được đảm bảo 100%. Có giấy
                                        chứng nhận
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="price-tag">
                                        <use xlinkHref="#price-tag" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">
                                        Ưu đãi hàng ngày
                                    </h3>
                                    <p>
                                        Bạn sẽ nhận được ưu đãi hàng ngày. Liên
                                        tục cập nhật website
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <svg className="shield-plus">
                                        <use xlinkHref="#shield-plus" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">
                                        Thanh toán an toàn 100%
                                    </h3>
                                    <p>
                                        100% độ an toàn khi thanh toán tại
                                        website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="product-list-show product-store position-relative padding-large no-padding-top"
                id="product-news"
            >
                <div className="container">
                    <div className="row">
                        <div className="product-section">
                            <h3 className="h3-product-section">Sản phẩm mới</h3>
                            <span>
                                <Link>Đi đến shop</Link>
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
                            {productNews.map((product) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <Product data={product} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section
                className="product-list-show product-store position-relative padding-large no-padding-top"
                id="product-news"
            >
                <div className="container">
                    <div className="row">
                        <div className="product-section">
                            <h3 className="h3-product-section">
                                Sản phẩm bán chạy
                            </h3>
                            <span>
                                <Link>Đi đến shop</Link>
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
                            {productBestsellers.map((product) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <Product data={product} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section
                className="bg-light-blue overflow-hidden my-5"
                id="yearly-sale"
                style={{
                    backgroundImage: "url('')",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                }}
            >
                <div className="row d-flex flex-wrap align-items-center h-100">
                    <div className="col-md-6 col-sm-12 h-100">
                        <div className="text-content offset-4 padding-medium">
                            <h2 className="display-2 pb-3 text-uppercase text-dark">
                                Mã Freeship
                            </h2>
                            <h3 className="pb-5">
                                Click vào nút bên dưới để nhẫn mã freeship của
                                Serein
                            </h3>
                            <form action="">
                                <button
                                    className="btn btn-medium button-primary-serein text-uppercase"
                                    href="shop.html"
                                >
                                    Shop Sale
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 h-100">
                        <img
                            alt=""
                            className="h-100 object-cover"
                            src="images/bannerfreeship.png"
                        />
                    </div>
                </div>
            </section>

            <section className="padding-large" id="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">
                                Bài viết gần đây
                            </h2>
                            <div className="btn-right">
                                <a
                                    className="btn btn-medium btn-normal text-uppercase"
                                    href="blog.html"
                                >
                                    Đến trang bài viết
                                </a>
                            </div>
                        </div>
                        <div className="post-grid d-flex flex-wrap justify-content-between">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            className="img-fluid"
                                            src="images/post-item1.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">
                                            feb 22, 2023
                                        </span>
                                        <span className="meta-category">
                                            - Gadgets
                                        </span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">
                                            Get some cool gadgets in 2023
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            className="img-fluid"
                                            src="images/post-item2.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">
                                            feb 25, 2023
                                        </span>
                                        <span className="meta-category">
                                            - Technology
                                        </span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">
                                            Technology Hack You Won't Get
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img
                                            alt=""
                                            className="img-fluid"
                                            src="images/post-item3.jpg"
                                        />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">
                                            feb 22, 2023
                                        </span>
                                        <span className="meta-category">
                                            - Camera
                                        </span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">
                                            Top 10 Small Camera In The World
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="review-content position-relative">
                            <div className="swiper testimonial-swiper">
                                <div className="quotation text-center">
                                    <svg className="quote">
                                        <use xlinkHref="#quote" />
                                    </svg>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={true}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="swiper-slide text-center d-flex justify-content-center">
                                            <div className="review-item col-md-10">
                                                <i className="icon icon-review" />
                                                <blockquote>
                                                    “Tempus oncu enim pellen
                                                    tesque este pretium in
                                                    neque, elit morbi
                                                    sagittis lorem habi
                                                    mattis Pellen tesque
                                                    pretium feugiat vel
                                                    morbi suspen dise
                                                    sagittis lorem habi
                                                    tasse morbi.”
                                                </blockquote>
                                                <div className="rating">
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-half">
                                                        <use xlinkHref="#star-half" />
                                                    </svg>
                                                    <svg className="star star-empty">
                                                        <use xlinkHref="#star-empty" />
                                                    </svg>
                                                </div>
                                                <div className="author-detail">
                                                    <div className="name text-dark text-uppercase pt-2">
                                                        Emma Chamberlin
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide text-center d-flex justify-content-center">
                                            <div className="review-item col-md-10">
                                                <i className="icon icon-review" />
                                                <blockquote>
                                                    “A blog is a digital
                                                    publication that can
                                                    complement a website or
                                                    exist independently. A
                                                    blog may include
                                                    articles, short posts,
                                                    listicles, infographics,
                                                    videos, and other
                                                    digital content.”
                                                </blockquote>
                                                <div className="rating">
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-fill">
                                                        <use xlinkHref="#star-fill" />
                                                    </svg>
                                                    <svg className="star star-half">
                                                        <use xlinkHref="#star-half" />
                                                    </svg>
                                                    <svg className="star star-empty">
                                                        <use xlinkHref="#star-empty" />
                                                    </svg>
                                                </div>
                                                <div className="author-detail">
                                                    <div className="name text-dark text-uppercase pt-2">
                                                        Jennie Rose
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="container-grid padding-large position-relative overflow-hidden"
                id="subscribe"
            >
                <div className="container">
                    <div className="row">
                        <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
                            <div className="col-md-6 col-sm-12">
                                <div className="display-header pe-3">
                                    <h2 className="display-7 text-uppercase text-light">
                                        Đăng ký ngay bây giờ
                                    </h2>
                                    <p>
                                        Nhận tin tức, cập nhật và giao dịch
                                        mới nhất được gửi trực tiếp đến hộp
                                        thư đến của bạn.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <form className="subscription-form validate">
                                    <div className="input-group flex-wrap">
                                        <input
                                            className="form-control btn-rounded-none"
                                            name="EMAIL"
                                            placeholder="Your email address here"
                                            required
                                            type="email"
                                        />
                                        <button
                                            className="btn btn-medium button-primary-serein text-uppercase"
                                            name="subscribe"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="padding-large overflow-hidden no-padding-top"
                id="instagram"
            >
                <div className="container">
                    <div className="row">
                        <div className="display-header text-uppercase text-dark text-center pb-3">
                            <h2 className="display-7">Shop Our Insta</h2>
                        </div>
                        <div className="d-flex flex-wrap">
                            <figure className="instagram-item pe-2">
                                <a
                                    className="image-link position-relative"
                                    href="https://templatesjungle.com/"
                                >
                                    <img
                                        alt="instagram"
                                        className="insta-image"
                                        src="images/insta-item1.jpg"
                                    />
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                </a>
                            </figure>
                            <figure className="instagram-item pe-2">
                                <a
                                    className="image-link position-relative"
                                    href="https://templatesjungle.com/"
                                >
                                    <img
                                        alt="instagram"
                                        className="insta-image"
                                        src="images/insta-item2.jpg"
                                    />
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                </a>
                            </figure>
                            <figure className="instagram-item pe-2">
                                <a
                                    className="image-link position-relative"
                                    href="https://templatesjungle.com/"
                                >
                                    <img
                                        alt="instagram"
                                        className="insta-image"
                                        src="images/insta-item3.jpg"
                                    />
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                </a>
                            </figure>
                            <figure className="instagram-item pe-2">
                                <a
                                    className="image-link position-relative"
                                    href="https://templatesjungle.com/"
                                >
                                    <img
                                        alt="instagram"
                                        className="insta-image"
                                        src="images/insta-item4.jpg"
                                    />
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                </a>
                            </figure>
                            <figure className="instagram-item pe-2">
                                <a
                                    className="image-link position-relative"
                                    href="https://templatesjungle.com/"
                                >
                                    <img
                                        alt="instagram"
                                        className="insta-image"
                                        src="images/insta-item5.jpg"
                                    />
                                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                                        <svg className="instagram">
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Home.layout = (page) => <LayoutUser children={page} />;

export default Home;
