import React from 'react';
import DetailXe from './components/DetailXe';
import Aboutus from './pages/Aboutus/Aboutus';
import Admin from './pages/Admin/Admin';
import Dk from './pages/DangKi/Dk';
import Dn from './pages/DangNhap/dn';
import Danhsachxe from './pages/Danhsachxe/Danhsachxe';
import HomePage from './pages/HomePage/HomePage';
import Lienhe from './pages/Lienhe/Lienhe';
import AdminAddqlxe from './pages/AdminActionPage/AdminAddqlxe';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/Danhsachxe/:id',
        exact: false,
        main: ({match}) => <DetailXe match={match}/>
    },
    {
        path: '/Danhsachxe',
        exact: false,
        main: ({match}) => <Danhsachxe match={match}/>
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
    },
    {
        path: '/Admin/add',
        exact: false,
        main: ({history}) => <AdminAddqlxe history ={history}/>
    },
    {
        path: '/Admin/:id/edit',
        exact: false,
        main: ({match,history}) => <AdminAddqlxe match = {match} history ={history}/>
    },
    {
        path: '/Admin',
        exact: false,
        main: () => <Admin/>,
    },
    
];

export default routes;