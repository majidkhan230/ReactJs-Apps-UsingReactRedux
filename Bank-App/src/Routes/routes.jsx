import { createBrowserRouter } from "react-router-dom";
import AddTransaction from "../pages/AddTransaction";
import Transactions from "../pages/Transactions";
import WithdrawTransaction from "../pages/WithdrawTransaction";
import App from "../App";
import Dashboard from "../pages/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "addtrans",
          element: <AddTransaction />,
        },
        {
          path: "dashboard",
          element: <Dashboard/>,
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
        {
          path: "withdraw",
          element: <WithdrawTransaction/>,
        },

      ],
    },
  ]);