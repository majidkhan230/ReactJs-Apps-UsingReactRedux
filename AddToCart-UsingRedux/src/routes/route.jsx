import App from "../App";
import AddToCart from "../pages/AddToCart";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
            path:"addtocart",
            element:<AddToCart/>,
        }
      ]
    },
  ])