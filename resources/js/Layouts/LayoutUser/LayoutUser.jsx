import React, {useState} from "react";
import { Link } from "@inertiajs/react";
import clsx from "clsx";
import {useRoute} from "../../../../vendor/tightenco/ziggy";

import styles from "./LayoutUserStyle.module.scss";
import SvgImage from "@/Component/ImageSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import SearchPop from "@/Component/SearchPop";
// import { NavLink } from '@/Component/NavLink';
import NavLink from "@/Component/NavLink";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function LayoutUser({ children }) {
    const route = useRoute();

    const classes = clsx(styles.test)
    const [isVisible,setIsVisible] = useState(false);

    const toggleSearchPopup = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    const closeSearchPopup = () => {
        setIsVisible(false);
    }

    return (
        <>
            <SvgImage />
            <SearchPop addClass={isVisible ? "is-visible" : ""} onClose={closeSearchPopup}/>
            <header className="container-fluid">
                <div className="container h-100">
                    <nav
                        id="header-nav"
                        className="navbar navbar-expand-lg navbar-light h-100"
                    >
                        <div className="container-fluid h-100">
                            <Link className="navbar-brand h-100 logo" href={route('home')}>
                                <img
                                    src="images/logo3.png"
                                    alt=""
                                    className="d-inline-block align-text-top h-100 w-100"
                                />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse nav-bar-custom mt-4"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <NavLink title="Home" href={route('home')}/>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            href="shop.html"
                                            id="navbarShop"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            shop
                                        </Link>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarShop"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <NavLink title="About" href={route('about')}/>
                                    <NavLink title="contact" href={route('contact')}/>
                                </ul>
                                <ul className="navbar-nav d-flex flex-row">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faUser} />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href={route('dashboard')}>Dashboard</Link></li>
                                            <li><a className="dropdown-item" href="#">Quên mật khẩu</a></li>
                                            <li><a className="dropdown-item" href="#">Đổi mật khẩu</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Đăng nhập</a></li>
                                            <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                                        </ul>
                                    </li>
                                    <li onClick={toggleSearchPopup} className="nav-item search-button">
                                        <Link
                                            href="#"
                                            className="nav-link nav-link-icon"
                                        >
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                            >
                                                <use xlinkHref="#search"></use>
                                            </FontAwesomeIcon>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link nav-link-icon"
                                            href="#"
                                        >
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <main>{children}</main>

            <footer id="footer" className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="footer-top-area">
                            <div className="row d-flex flex-wrap justify-content-between">
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <img
                                            src="images/main-logo.png"
                                            alt="logo"
                                        />
                                        <p>
                                            Nisi, purus vitae, ultrices nunc.
                                            Sit ac sit suscipit hendrerit.
                                            Gravida massa volutpat aenean odio
                                            erat nullam fringilla.
                                        </p>
                                        <div className="social-links">
                                            <ul className="d-flex list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <svg className="facebook">
                                                            <use xlinkHref="#facebook" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg className="instagram">
                                                            <use xlinkHref="#instagram" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg className="twitter">
                                                            <use xlinkHref="#twitter" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg className="linkedin">
                                                            <use xlinkHref="#linkedin" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg className="youtube">
                                                            <use xlinkHref="#youtube" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 pb-3">
                                    <div className="footer-menu text-uppercase">
                                        <h5 className="widget-title pb-2">
                                            Quick Links
                                        </h5>
                                        <ul className="menu-list list-unstyled text-uppercase">
                                            <li className="menu-item pb-2">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">About</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Shop</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Blogs</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu text-uppercase">
                                        <h5 className="widget-title pb-2">
                                            Help & Info Help
                                        </h5>
                                        <ul className="menu-list list-unstyled">
                                            <li className="menu-item pb-2">
                                                <a href="#">Track Your Order</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Returns Policies</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">
                                                    Shipping + Delivery
                                                </a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="#">Faqs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu contact-item">
                                        <h5 className="widget-title text-uppercase pb-2">
                                            Contact Us
                                        </h5>
                                        <p>
                                            Do you have any queries or
                                            suggestions?{" "}
                                            <a href="mailto:">
                                                yourinfo@gmail.com
                                            </a>
                                        </p>
                                        <p>
                                            If you need support? Just give us a
                                            call.{" "}
                                            <a href="">+55 111 222 333 44</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </footer>

            <div id="footer-bottom">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">
                        <div className="col-md-4 col-sm-6">
                            <div className="Shipping d-flex">
                                <p>We ship with:</p>
                                <div className="card-wrap ps-2">
                                    <img src="images/dhl.png" alt="visa" />
                                    <img
                                        src="images/shippingcard.png"
                                        alt="mastercard"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="payment-method d-flex">
                                <p>Payment options:</p>
                                <div className="card-wrap ps-2">
                                    <img src="images/visa.jpg" alt="visa" />
                                    <img
                                        src="images/mastercard.jpg"
                                        alt="mastercard"
                                    />
                                    <img src="images/paypal.jpg" alt="paypal" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="copyright">
                                <p>
                                    © Copyright 2023 MiniStore. Design by{" "}
                                    <a href="https://templatesjungle.com/">
                                        TemplatesJungle
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutUser;
