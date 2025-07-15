import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../../layout/Root/Root';
import JobPost from '../../components/JobPost';


const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [{
        path: '/',
        element: <JobPost></JobPost>
    }

    ]

}])

export default Router;