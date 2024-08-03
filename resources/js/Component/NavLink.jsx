import { Link } from "@inertiajs/react";

function NavLink({title, href}) {
    return (  
        <>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    aria-current="page"
                    href={href}
                >
                    {title}
                </Link>
            </li>
        </>
    );
}

export default NavLink;