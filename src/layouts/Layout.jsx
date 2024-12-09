import Footer from '@layouts/Footer.jsx';

import { Outlet } from 'react-router-dom';
import '@styles/layouts/layout.css';

export default function Layout() {
  return (
    <div className='container'>
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
