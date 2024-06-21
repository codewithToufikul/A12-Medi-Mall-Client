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
import ManageUser from "../DashboardPages/Pages/ManageUser/ManageUser";
import ManageCategory from "../DashboardPages/Pages/ManageCategory/ManageCategory";
import ManagePayments from "../DashboardPages/Pages/ManagePayments/ManagePayments";
import ManageAdvice from "../DashboardPages/Pages/ManageAdvice/ManageAdvice";
import UserPaymentHistiry from "../DashboardPages/Pages/UserPaymentHistiry/UserPaymentHistiry";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageMedicine from "../DashboardPages/Pages/ManageMedicine/ManageMedicine";
import PaymentsHistory from "../DashboardPages/Pages/PaymentsHistory/PaymentsHistory";
import ManageAdd from "../DashboardPages/Pages/ManageAdd/ManageAdd";
import DashboardHome from "../DashboardPages/Pages/DashboardHome/DashboardHome";
import ReportSell from "../DashboardPages/Pages/ReportSell/ReportSell";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
        element: <Register />,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/categories/:categoriesName",
        element: <CategoryDetails />,
      },
      {
        path: "/carts",
        element: <ManageCart></ManageCart>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "/invoice",
        element: <InvoicePage></InvoicePage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <DashboardHome></DashboardHome>
      },
      // admin route
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            {" "}
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manage-category",
        element: (
          <AdminRoute>
            <ManageCategory></ManageCategory>
          </AdminRoute>
        ),
      },
      {
        path: "manage-payments",
        element: (
          <AdminRoute>
            <ManagePayments></ManagePayments>
          </AdminRoute>
        ),
      },
      {
        path: "manage-advice",
        element: (
          <AdminRoute>
            <ManageAdvice></ManageAdvice>
          </AdminRoute>
        ),
      },
      {
        path: 'report-sale',
        element: <AdminRoute>
          <ReportSell></ReportSell>
        </AdminRoute>
      },
      // user route
      {
        path: "payment-history",
        element: <UserPaymentHistiry></UserPaymentHistiry>,
      },
      // seller route
      {
        path: "manage-medicine",
        element: <ManageMedicine></ManageMedicine>,
      },
      {
        path: "payments-history",
        element: <PaymentsHistory></PaymentsHistory>
      },
      {
        path: "manage-add",
        element: <ManageAdd></ManageAdd>
      }
    ],
  },
]);
