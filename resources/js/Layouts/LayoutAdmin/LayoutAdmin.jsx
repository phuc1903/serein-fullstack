import { Link } from "@inertiajs/react";
import { useRoute } from 'V/tightenco/ziggy';

function LayoutAdmin({ children }) {

    const route = useRoute();
    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="siderbar-admin col-lg-3 col-md-4 mb-5">
                        <a className="branch mb-4 d-block w-100" href="">
                            <img
                                alt=""
                                className="w-100 h-100"
                                src="images/logo3.png"
                            />
                        </a>
                        <div className="">
                            <div className="siderbar-main siderbar-item-admin p-2">
                                <a
                                    aria-controls="collapseAdmin"
                                    aria-expanded="true"
                                    className="accordion-button siderbar-list siderbar-general active"
                                    data-bs-target="#collapseAdmin"
                                    data-bs-toggle="collapse"
                                    type="button"
                                >
                                    <span className="siderbar-list-icon siderbar-icon-general">
                                        <i className="fa-solid fa-house" />
                                    </span>
                                    <p className="siderbar-list-content siderbar-content-general m-0">
                                        Bảng điều khiển
                                    </p>
                                </a>
                                <div
                                    aria-labelledby="headingOne"
                                    className="accordion-collapse collapse show siderbar-list-item"
                                    data-bs-parent="#accordionExample"
                                    id="collapseAdmin"
                                >
                                    <ul>
                                        <li>
                                            <Link
                                                className="siderbar-item siderbar-general active"
                                                href={route('dashboard')}
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Dashboard
                                                </p>
                                            </Link>
                                        </li>
                                        <li />
                                        <li>
                                            <Link
                                                className="siderbar-item siderbar-general"
                                                href={route('product.index')}
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý sản phẩm
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý danh mục
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý bình luận
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý tài khoản khách hàng
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý đơn hàng
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý banner
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quản lý voucher
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="siderbar-main siderbar-item-user p-2">
                                <a
                                    aria-controls="collapseUser"
                                    aria-expanded="true"
                                    className="accordion-button siderbar-list siderbar-general active"
                                    data-bs-target="#collapseUser"
                                    data-bs-toggle="collapse"
                                    type="button"
                                >
                                    <span className="siderbar-list-icon siderbar-icon-general">
                                        <i className="fa-solid fa-user" />
                                    </span>
                                    <p className="siderbar-list-content siderbar-content-general m-0">
                                        Tài khoản của bạn
                                    </p>
                                </a>
                                <div
                                    aria-labelledby="headingOne"
                                    className="accordion-collapse collapse siderbar-list-item"
                                    data-bs-parent="#accordionExample"
                                    id="collapseUser"
                                >
                                    <ul>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general active"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Thông tin
                                                </p>
                                            </a>
                                        </li>
                                        <li />
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Lịch sử mua hàng
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Sản phẩm yêu thích
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Đổi mật khẩu
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Quên mật khẩu
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="siderbar-item siderbar-general"
                                                href="#"
                                            >
                                                <span className="siderbar-item-icon siderbar-icon-general" />
                                                <p className="siderbar-item-content siderbar-content-general m-0">
                                                    Đăng xuất
                                                </p>
                                            </a>
                                        </li>
                                        <li />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-admin col-lg-9 col-md-8 mb-5">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LayoutAdmin;
