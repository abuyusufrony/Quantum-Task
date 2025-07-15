import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../layout/Root/Root';
import JobPost from '../../components/JobPost';
import Singup from '../../page/Singup';
import path from 'path';
import Signin from '../../page/Signin';


const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [{
        path: '/',
        element: <JobPost></JobPost>
    },
    {
        path: '/signup',
        element: <Singup></Singup>
    },
    {
        path: '/signin',
        element: <Signin></Signin>
    }

    ]

}])

export default Router;