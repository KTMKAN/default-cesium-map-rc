import { createBrowserRouter } from 'react-router-dom';

import BasicLayout from '@/src/layouts/BasicLayout';

import CesiumTestPage from '@/src/pages/CesiumTestPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout />,
        children: [
            { path: "cesiumTestPage", element: <CesiumTestPage /> },
        ]
    },
]);

export default router;