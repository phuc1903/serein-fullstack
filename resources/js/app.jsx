import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import LayoutUser from '@/Layouts/LayoutUser/LayoutUser'
import LayoutAdmin from '@/Layouts/LayoutAdmin/LayoutAdmin'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`]
    if (name.toLowerCase().startsWith('admin/')) {  
      page.default.layout = page.default.layout || ((page) => <LayoutAdmin>{page}</LayoutAdmin>);
    } else {
      page.default.layout = page.default.layout || ((page) => <LayoutUser>{page}</LayoutUser>);
    }
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})