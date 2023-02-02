import { createBrowserRouter } from "react-router-dom"; 
import Index from './pages/index';
import Haloween from './pages/haloween';
import Menu from './pages/menu';
import Shop from './pages/shop';
import Accsess from './pages/access';



const route = createBrowserRouter ([
    {
        path:"/",
        element:<Index />,
    },
    {
        path:"/haloween",
        element:<Haloween />,
    },
    {
        path:"/menu",
        element:<Menu />,
    },
    {
        path:"/shop",
        element:<Shop />,
    },
    {
        path:"/access",
        element:<Accsess />,
    },
]);

export {route}