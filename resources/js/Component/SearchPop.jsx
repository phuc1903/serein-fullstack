import React, {useState} from 'react';

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

    return (
        <div className={`search-popup ${addClass}`} onClick={handlePopupClick}>
            <div className="search-popup-container">
                <form role="search" method="get" className="search-form" action="">
                    <input
                        type="search"
                        id="search-form"
                        className="search-field"
                        placeholder="Nhập tìm kiếm của bạn"
                        value=""
                        name="s"
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
                    <li className="cat-list-item">
                        <a href="#" title="Mobile Phones">
                            Mobile Phones
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Smart Watches">
                            Smart Watches
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Headphones">
                            Headphones
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Accessories">
                            Accessories
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Monitors">
                            Monitors
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Speakers">
                            Speakers
                        </a>
                    </li>
                    <li className="cat-list-item">
                        <a href="#" title="Memory Cards">
                            Memory Cards
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchPop;
