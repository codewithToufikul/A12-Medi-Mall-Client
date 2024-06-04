import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer";

const Main = () => {
    return (
        <div className=" font-raleway">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;