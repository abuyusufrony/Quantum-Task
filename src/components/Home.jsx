import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Home = () => {
    return (
        <div>

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;