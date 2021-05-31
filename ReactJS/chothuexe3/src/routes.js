import React from 'react';
import Aboutus from './pages/Aboutus/Aboutus';
import Dk from './pages/DangKi/Dk';
import Dn from './pages/DangNhap/dn';
import Danhsachxe from './pages/Danhsachxe/Danhsachxe';
import HomePage from './pages/HomePage/HomePage';
import Lienhe from './pages/Lienhe/Lienhe';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/Danhsachxe',
        exact: false,
        main: () => <Danhsachxe/>
    },
    {
        path: '/Lienhe',
        exact: false,
        main: () => <Lienhe/>
    },
    {
        path: '/DangNhap',
        exact: false,
        main: () => <Dn/>
    },
    {
        path: '/DangKi',
        exact: false,
        main: () => <Dk/>
    },
    {
        path: '/AboutUs',
        exact: false,
        main: () => <Aboutus/>,
    }
];

export default routes;