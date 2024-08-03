import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import LayoutUser from "@/Layouts/LayoutUser/LayoutUser";
import LayoutAdmin from "@/Layouts/LayoutAdmin/LayoutAdmin";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        if (name.startsWith("Admin/")) {
            page.default.layout = page.default.layout || ((page) => <LayoutAdmin>{page}</LayoutAdmin>);
        } else {
            page.default.layout = page.default.layout || ((page) => <LayoutUser>{page}</LayoutUser>);
        }
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
