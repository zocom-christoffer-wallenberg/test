import { createBrowserRouter } from "react-router-dom";

import Events from "../pages/Events";
import SelectedEvent from "../pages/SelectedEvent";
import Confirmation from "../pages/Confirmation";

function isProduction() {
  if (import.meta.env.PROD) return { basename: "/test" };
  else return {};
}

const router = createBrowserRouter([
  {
    path: "/", // / är startsidan
    element: <Events />,
  },
  {
    path: "/event",
    element: <SelectedEvent />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  isProduction(),
]);

export default router;
