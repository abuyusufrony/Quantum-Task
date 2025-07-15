import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            this are Home

            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;