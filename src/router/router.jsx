import { createBrowserRouter } from "react-router-dom";

import Events from "../pages/Events";
import SelectedEvent from "../pages/SelectedEvent";
import Confirmation from "../pages/Confirmation";

function isProduction() {
  console.log(import.meta.env);

  if (import.meta.env.PROD) return { basename: "/test" };
  else return {};
}

const basename = isProduction();
console.log(basename);

const router = createBrowserRouter(
  [
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
  ],
  basename
);

export default router;
