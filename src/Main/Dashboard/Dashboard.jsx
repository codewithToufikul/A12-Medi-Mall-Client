import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaList, FaUsers } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoHomeSharp, IoMenu } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import navLogo from "../../assets/navLogo.png";
import { TbFileReport } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isSeller, isSellerLoading] = useSeller();

  if (isAdminLoading || isSellerLoading) {
    return <div>Loading...</div>;
  }

  const adminNav = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="home"
        >
          <div className="flex items-center gap-2">
            <p className="text-xl">
              <IoHomeSharp size={25} />
            </p>
            <p>ADMIN HOME</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-user"
        >
          <div className="flex items-center gap-2">
            <p>
              <FaUsers size={25} />
            </p>
            <p>MANAGE USER</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-category"
        >
          <div className="flex items-center gap-2">
            <p>
              <FaList size={23} />
            </p>
            <p>MANAGE CATEGORY</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-payments"
        >
          <div className="flex items-center gap-2">
            <p>
              <MdOutlinePayments size={25} />
            </p>
            <p>MANAGE PAYMENTS</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="/dashbord"
        >
          <div className="flex items-center gap-2">
            <p>
              <TbFileReport size={25} />
            </p>
            <p>SALES REPORTS</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-advice"
        >
          <div className="flex items-center gap-2">
            <p>
              <RiAdvertisementLine size={25} />
            </p>
            <p>MANAGE ADVERTISE</p>
          </div>
        </NavLink>
      </li>
    </>
  );

  const sellerNav = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="seller-home"
        >
          <div className="flex items-center gap-2">
            <p className="text-xl">
              <IoHomeSharp size={25} />
            </p>
            <p>SELLER HOME</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-medicine"
        >
          <div className="flex items-center gap-2">
            <p>
              <FaList size={23} />
            </p>
            <p>MANAGE MEDICINE</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="manage-orders"
        >
          <div className="flex items-center gap-2">
            <p>
              <MdOutlinePayments size={25} />
            </p>
            <p>MANAGE ORDERS</p>
          </div>
        </NavLink>
      </li>
    </>
  );

  const userNav = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="user-home"
        >
          <div className="flex items-center gap-2">
            <p className="text-xl">
              <IoHomeSharp size={25} />
            </p>
            <p>USER HOME</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="payment-history"
        >
          <div className="flex items-center gap-2">
            <p>
              <MdOutlinePayments size={25} />
            </p>
            <p>PAYMENTS HISTORY</p>
          </div>
        </NavLink>
      </li>
    </>
  );

  const bottomNav = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="/"
        >
          <div className="flex items-center gap-2">
            <p>
              <AiFillHome size={25} />
            </p>
            <p>HOME</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="/menu"
        >
          <div className="flex items-center gap-2">
            <p>
              <IoMenu size={25} />
            </p>
            <p>MENU</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to={`/shop/${"salad"}`}
        >
          <div className="flex items-center gap-2">
            <p>
              <AiFillShopping size={23} />
            </p>
            <p>SHOP</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-custom-custom font-bold font-inter text-base"
              : "text-base font-inter"
          }
          to="/contacts"
        >
          <div className="flex items-center gap-2">
            <p>
              <GrContactInfo size={25} />
            </p>
            <p>CONTACT</p>
          </div>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex w-full">
      <div className="sticky z-40 left-0 top-0 px-8 bg-base-300 w-[300px] h-screen">
        <div className="pt-8 pb-12 flex flex-col items-center font-cinzel">
          <img src={navLogo} alt="" />
        </div>
        <div className="px-1">
          <ul className="space-y-6 border-b-4 border-black pb-10">
            {isAdmin ? (
              adminNav
            ) : isSeller ? (
              sellerNav
            ) : (
              userNav
            )}
          </ul>
          <ul className="space-y-6 pt-10">{bottomNav}</ul>
        </div>
      </div>
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
