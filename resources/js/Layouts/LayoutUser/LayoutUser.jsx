import React, {useState} from "react";

import SvgImage from "../../Component/ImageSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import SearchPop from "../../Component/SearchPop";
function LayoutUser({ children }) {

    const [isVisible,setIsVisible] = useState(false);

    const toggleSearchPopup = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    return (
        <>
            <SvgImage />
            <SearchPop addClass={isVisible ? "is-visible" : ""}/>
            <header className="container-fluid">
                <div className="container h-100">
                    <nav
                        id="header-nav"
                        className="navbar navbar-expand-lg navbar-light h-100"
                    >
                        <div className="container-fluid h-100">
                            <a className="navbar-brand h-100 logo" href="#">
                                <img
                                    src="images/logo3.png"
                                    alt=""
                                    className="d-inline-block align-text-top h-100 w-100"
                                />
                            </a>
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
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="index.html"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="shop.html"
                                            id="navbarShop"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            shop
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarShop"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="shop.html"
                                                >
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="about.html"
                                        >
                                            about
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="contact.html"
                                        >
                                            contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav d-flex flex-row">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href="#"
                                            id="navbarUser"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa-regular fa-user d-ms-none"></i>
                                            {/* <img className="rounded-circle w-25 h-25" src="img/default.jpg" alt=""/> */}
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarUser"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li onClick={toggleSearchPopup} className="nav-item search-button">
                                        <a
                                            href="#"
                                            className="nav-link nav-link-icon"
                                        >
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                            >
                                                <use xlinkHref="#search"></use>
                                            </FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link nav-link-icon"
                                            href="#"
                                        >
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </a>
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
