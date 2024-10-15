import { createBrowserRouter } from "react-router-dom";

import Events from "../pages/Events";
import SelectedEvent from "../pages/SelectedEvent";
import Confirmation from "../pages/Confirmation";

const router = createBrowserRouter([
    {
        path: '/', // / är startsidan
        element: <Events />
    },
    {
        path: '/event',
        element: <SelectedEvent />
    },
    {
        path: '/confirmation',
        element: <Confirmation />
    }
]);

export default router;