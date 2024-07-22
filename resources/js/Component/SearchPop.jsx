
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

function SearchPop({addClass, onClose}) {

    const handlePopupClick = (event) => {
        if (
            event.target.classList.contains('search-popup-close') ||
            event.target.closest('.search-popup-close') ||
            event.target.classList.contains('search-popup')
        ) {
            event.preventDefault();
            onClose();
        }
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const [search, setSearch] = useState("");

    return (
        <div className={`search-popup ${addClass}`} onClick={handlePopupClick}>
            <div className="search-popup-container">
                <form role="search" method="get" className="search-form" action="">
                    <input
                        type="search"
                        id="search-form"
                        className="search-field"
                        placeholder="Nhập tìm kiếm của bạn"
                        value={search}
                        // name="s"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit" className="search-submit">
                        <svg className="search">
                            <use xlink:href="#search"></use>
                        </svg>
                    </button>
                </form>

                <h5 className="cat-list-title">Các danh mục</h5>

                <ul className="cat-list">
                    {/* List Categories */}
                    {categories.map(cate => {
                        return (
                            <li key={cate.id} className="cat-list-item">
                                <Link title="Mobile Phones">
                                    {cate.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchPop;
