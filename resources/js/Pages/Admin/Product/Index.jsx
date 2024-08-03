import clsx from "clsx";
import { useRoute } from 'V/tightenco/ziggy';
import styles from "./ProductStyle.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faGripVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

const cn = (...classes) => clsx(classes.map((cls) => styles[cls] || cls));

function Index({products}) {

    console.log(products);

    const route = useRoute();

    return (
        <>
            <nav>

            </nav>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="py-3 mb-2">
                        <span className="text-muted fw-light">Admin /</span>
                        Danh sách sản phẩm
                    </h4>
                    <div className="app-ecommerce-category">
                        {/* Category List Table */}
                        <div className="card">
                            <div className="card-datatable table-responsive">
                                <div
                                    id="DataTables_Table_0_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
                                    <div className="card-header d-flex flex-wrap pb-2 justify-content-between">
                                        <div>
                                            <div
                                                id="DataTables_Table_0_filter"
                                                className="dataTables_filter me-3 ps-0"
                                            >
                                                <label>
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        placeholder="Tìm kiếm sản phẩm"
                                                        aria-controls="DataTables_Table_0"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center justify-content-md-end align-items-baseline">
                                            <div className="dt-action-buttons d-flex justify-content-center flex-md-row mb-3 mb-md-0 ps-1 ms-1 align-items-baseline pt-0">
                                                <div
                                                    className="dataTables_length"
                                                    id="DataTables_Table_0_length"
                                                >
                                                    <label>
                                                        <select
                                                            name="DataTables_Table_0_length"
                                                            aria-controls="DataTables_Table_0"
                                                            className="form-select"
                                                        >
                                                            <option
                                                                selected=""
                                                                value={7}
                                                            >
                                                                Danh mục
                                                            </option>
                                                            <option value={10}>
                                                                Nhẫn bạc
                                                            </option>
                                                            <option value={20}>
                                                                Nhẫn vàng
                                                            </option>
                                                            <option value={50}>
                                                                Nhẫn kim cương
                                                            </option>
                                                            <option value={70}>
                                                                Vòng tay
                                                            </option>
                                                            <option value={100}>
                                                                Dây chuyền
                                                            </option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="dt-buttons btn-group flex-wrap">
                                                    <button
                                                        className="btn btn-secondary add-new btn-outline-primary ms-2 waves-effect waves-light"
                                                        tabIndex={0}
                                                        aria-controls="DataTables_Table_0"
                                                        type="button"
                                                        data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasEcommerceProductList"
                                                    >
                                                        <span>
                                                            <i className="ti ti-plus ti-xs me-0 me-sm-2"></i>
                                                            <span className="d-none d-sm-inline-block">
                                                                Thêm sản phẩm
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table
                                        className="datatables-category-list table border-top dataTable no-footer dtr-column"
                                        id="DataTables_Table_0"
                                        aria-describedby="DataTables_Table_0_info"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    className="control sorting_disabled dtr-hidden"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{
                                                        width: 0,
                                                        display: "none",
                                                    }}
                                                    aria-label=""
                                                />
                                                <th
                                                    className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 18 }}
                                                    data-col={1}
                                                    aria-label=""
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                    />
                                                </th>
                                                <th
                                                    className="sorting sorting_desc"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 494 }}
                                                    aria-label="Categories: activate to sort column ascending"
                                                    aria-sort="descending"
                                                >
                                                    Sản phẩm
                                                </th>
                                                <th
                                                    className="sorting sorting_desc"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 494 }}
                                                    aria-label="Categories: activate to sort column ascending"
                                                    aria-sort="descending"
                                                >
                                                    Danh mục
                                                </th>
                                                <th
                                                    className="sorting sorting_desc"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 494 }}
                                                    aria-label="Categories: activate to sort column ascending"
                                                    aria-sort="descending"
                                                >
                                                    Giá
                                                </th>
                                                <th
                                                    className="text-nowrap text-sm-end sorting"
                                                    tabIndex={0}
                                                    aria-controls="DataTables_Table_0"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 145 }}
                                                    aria-label="Total Products &nbsp;: activate to sort column ascending"
                                                >
                                                    Trạng thái
                                                </th>
                                                <th
                                                    className="text-lg-center sorting_disabled"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    style={{ width: 73 }}
                                                    aria-label="Actions"
                                                >
                                                    Hành động
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map(product => (
                                            <tr key={product.id} className="odd">
                                                <td
                                                    className="  control"
                                                    tabIndex={0}
                                                    style={{ display: "none" }}
                                                />
                                                <td className="  dt-checkboxes-cell">
                                                    <input
                                                        type="checkbox"
                                                        className="dt-checkboxes form-check-input"
                                                    />
                                                </td>
                                                <td className="sorting_1">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-wrapper">
                                                            <div className="avatar avatar me-2 rounded-2 bg-label-secondary">
                                                                <img
                                                                    src={product.image}
                                                                    alt="Product-9"
                                                                    className="rounded-2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <h6 className="text-body text-nowrap mb-0">
                                                                {product.name}
                                                            </h6>
                                                            <small className="text-muted text-truncate d-none d-sm-block">
                                                                Tồn kho: 0{" "}
                                                                <b>|</b> Thương
                                                                hiệu: Nike
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                        {product.categories.map(category => (
                                                            <span className="text-truncate d-flex align-items-center my-1">
                                                                    {category.name}
                                                            </span>
                                                        ))}
                                                </td>
                                                <td>
                                                    <div className="h6 mb-0">
                                                        {product.price} VNĐ
                                                    </div>
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge bg-label-danger"
                                                        text-capitalized=""
                                                    >
                                                        Hết hàng
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-block text-nowrap">
                                                        <Link href={route('product.show', product)} className="btn btn-sm btn-icon">
                                                            <FontAwesomeIcon icon={faEdit}/>
                                                        </Link>
                                                        <button className="btn btn-sm btn-icon delete-record">
                                                            <FontAwesomeIcon icon={faTrash}/>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                            <FontAwesomeIcon icon={faGripVertical}/>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-end m-0">
                                                            <a
                                                                href="javascript:0;"
                                                                className="dropdown-item"
                                                            >
                                                                View
                                                            </a>
                                                            <a
                                                                href="javascript:0;"
                                                                className="dropdown-item"
                                                            >
                                                                Suspend
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {/* Paginate */}
                                    <div className="row mx-2 align-items-center py-3">
                                        <div className="col-sm-12 col-md-6">
                                            <div
                                                className="dataTables_info"
                                                id="DataTables_Table_0_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing 1 to 7 of 14 entries
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id="DataTables_Table_0_paginate"
                                            >
                                                <ul className="pagination mb-0 align-items-center justify-content-end">
                                                    <li
                                                        className="paginate_button page-item previous disabled"
                                                        id="DataTables_Table_0_previous"
                                                    >
                                                        <a
                                                            aria-controls="DataTables_Table_0"
                                                            aria-disabled="true"
                                                            role="link"
                                                            data-dt-idx="previous"
                                                            tabIndex={-1}
                                                            className="page-link"
                                                        >
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            aria-current="page"
                                                            data-dt-idx={0}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx={1}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            2
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="paginate_button page-item next"
                                                        id="DataTables_Table_0_next"
                                                    >
                                                        <a
                                                            href="#"
                                                            aria-controls="DataTables_Table_0"
                                                            role="link"
                                                            data-dt-idx="next"
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Offcanvas to add new product */}
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasEcommerceProductList"
                            aria-labelledby="offcanvasEcommerceProductListLabel"
                        >
                            {/* Offcanvas Header */}
                            <div className="offcanvas-header py-4">
                                <h5
                                    id="offcanvasEcommerceProductListLabel"
                                    className="offcanvas-title"
                                >
                                    Thêm sản phẩm
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close bg-label-secondary text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            {/* Offcanvas Body */}
                            <div className="offcanvas-body border-top">
                                <form className="pt-0 fv-plugins-bootstrap5 fv-plugins-framework form-add-product">
                                    {/* Title */}
                                    <div className="mb-3 fv-plugins-icon-container">
                                        <label
                                            className="form-label"
                                            htmlFor="ecommerce-product-name"
                                        >
                                            Tên sản phẩm
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ecommerce-product-name"
                                            placeholder="Nhập tên sản phẩm"
                                            name="productName"
                                            aria-label="product name"
                                        />
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    {/* Price */}
                                    <div className="mb-3">
                                        <label
                                            className="form-lable"
                                            htmlFor="ecommerce-product-price"
                                        >
                                            Giá sản phẩm
                                        </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Nhập giá sản phẩm"
                                            name="ecommerce-product-price"
                                            id="ecommerce-product-price"
                                        />
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="form-lable"
                                            htmlFor="ecommerce-product-quantity"
                                        >
                                            Số lượng sản phẩm
                                        </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Nhập Số lượng sản phẩm"
                                            name="ecommerce-product-quantity"
                                            id="ecommerce-product-quantity"
                                        />
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    {/* Slug */}
                                    <div className="mb-3 fv-plugins-icon-container">
                                        <label
                                            className="form-label"
                                            htmlFor="ecommerce-product-slug"
                                        >
                                            Slug
                                        </label>
                                        <input
                                            type="text"
                                            id="ecommerce-product-slug"
                                            className="form-control"
                                            placeholder="Nhập slug của sản phẩm"
                                            aria-label="slug"
                                            name="slug"
                                        />
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    {/* Image */}
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                            htmlFor="ecommerce-product-image"
                                        >
                                            Chọn hình ảnh sản phẩm
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="ecommerce-product-image"
                                        />
                                    </div>
                                    {/* Description */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="ecommerce-product-description"
                                            className="form-label"
                                        >
                                            Mô tả ngắn sản phẩm
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="ecommerce-product-description"
                                            rows={3}
                                        />
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    {/* Status */}
                                    <div className="mb-4 ecommerce-select2-dropdown">
                                        <label className="form-label">
                                            Chọn danh mục
                                        </label>
                                        <div className="position-relative">
                                            <select
                                                id="ecommerce-category-status"
                                                className="select2 form-select"
                                            >
                                                <option
                                                    value=""
                                                >
                                                    Chọn danh mục sản phẩm
                                                </option>
                                                <option value="Scheduled">
                                                    Scheduled
                                                </option>
                                                <option value="Publish">
                                                    Publish
                                                </option>
                                                <option value="Inactive">
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                                            error
                                        </div>
                                    </div>
                                    {/* Submit and reset */}
                                    <div className="mt-auto">
                                        <button
                                            type="submit"
                                            className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                                        >
                                            Thêm
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn bg-label-danger"
                                            data-bs-dismiss="offcanvas"
                                        >
                                            Hủy bỏ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content wrapper */}
            </div>
        </>
    );
}

export default Index;
