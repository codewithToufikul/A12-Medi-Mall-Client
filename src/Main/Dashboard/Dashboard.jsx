import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaList, FaUsers } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoHomeSharp, IoMenu } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import navLogo from '../../assets/navLogo.png';
import { TbFileReport } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";

const Dashboard = () => {
    const topNav = 
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="home"
        >
           <div className=" flex items-center gap-2">
           <p className=" text-xl"><IoHomeSharp size={25}/></p>
           <p> ADMIN HOME</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="manage-user"
        >
           <div className=" flex items-center gap-2">
           <p ><FaUsers size={25} /></p>
           <p>MANAGE USER</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/dashboar"
        >
           <div className=" flex items-center gap-2">
           <p ><FaList size={23} /></p>
           <p>MANAGE CATEGORY</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/dashard"
        >
           <div className=" flex items-center gap-2">
           <p ><MdOutlinePayments size={25} /></p>
           <p>MANAGE PAYMENTS</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/dashboad"
        >
           <div className=" flex items-center gap-2">
           <p ><TbFileReport size={25} /></p>
           <p>SALES REPORTS</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/dashbrd"
        >
           <div className=" flex items-center gap-2">
           <p ><RiAdvertisementLine size={25} /></p>
           <p>MANAGE ADVERTISE</p>
           </div>
        </NavLink>
      </li>
    
     
      
    </>
    const bottomNav = 
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/"
        >
           <div className=" flex items-center gap-2">
           <p ><AiFillHome size={25}/></p>
           <p>HOME</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/menu"
        >
           <div className=" flex items-center gap-2">
           <p ><IoMenu size={25} /></p>
           <p>MENU</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to={`/shop/${"salad"}`}
        >
           <div className=" flex items-center gap-2">
           <p ><AiFillShopping size={23} /></p>
           <p>SHOP</p>
           </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : isPending
              ? "pending"
              : "text-base font-inter"
          }
          to="/contacts"
        >
           <div className=" flex items-center gap-2">
           <p ><GrContactInfo size={25} /></p>
           <p>CONTACT</p>
           </div>
        </NavLink>
      </li> 
    </>
  return (
    <div className=" flex w-full">
      <div className=" px-8 bg-base-300 w-[300px] min-h-screen">
        <div className=" pt-8 pb-12 flex flex-col items-center font-cinzel">
         <img src={navLogo} alt="" />
        </div>
        <div className=" px-1">
            <ul className=" space-y-6 border-b-4 border-black pb-10">
            {topNav}
            </ul>
            <ul className=" space-y-6 pt-10">
                {bottomNav}
            </ul>
        </div>
      </div>
      <div className=" w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;