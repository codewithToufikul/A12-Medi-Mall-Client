import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Shop from "../Shop/Shop";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import ManageCart from "../MangeCart/ManageCart";
import CheckoutPage from "../MangeCart/Payment/CheckOutPage";
import InvoicePage from "../InvoicePage/InvoicePage";
import Dashboard from "../../Main/Dashboard/Dashboard";
import TotalSale from "../DashboardPages/Pages/TotalSale/TotalSale";
import ManageUser from "../DashboardPages/Pages/ManageUser/ManageUser";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/categories/:categoriesName",
          element: <CategoryDetails />,
        },
        {
          path: "/carts",
          element: <ManageCart></ManageCart>
        },
        {
          path: "/checkout",
          element: <CheckoutPage></CheckoutPage>
         },
         {
          path: "/invoice",
          element: <InvoicePage></InvoicePage>
         }
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: "home",
          element: <TotalSale></TotalSale>
        },
        {
          path: "manage-user",
          element: <ManageUser></ManageUser>
        }
      ]
    }
  ]);