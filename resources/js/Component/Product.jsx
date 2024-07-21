import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Product({data}) {
    return (
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
                            {data.title}
                        </div>
                        <div className="product-item-price">
                            <Link href="detail.html">{data.price} VNĐ</Link>
                        </div>
                    </div>
                    <div className="buy-product">
                        <Link className="btn-product btn-product-buy" href="">
                            Mua ngay
                        </Link>
                        <Link className="btn-product btn-product-heart">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                        <Link className="btn-product btn-product-cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product;
