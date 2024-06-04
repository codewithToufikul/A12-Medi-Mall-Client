import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import navLogo from '../../../assets/navLogo.png';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('shadow-lg');
      } else {
        navbar.classList.remove('shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLink = (
    <>
      <p>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-[#f99a00] mr-6 text-white p-[6px] px-3 rounded-md  font-semibold text-lg"
              : isPending
              ? "pending"
              : "text-lg mr-6   font-bold "
          }
          to="/"
        >
          HOME
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? " bg-[#f99a00] mr-6 text-white p-[6px] px-3 rounded-md  font-semibold text-lg "
              : isPending
              ? "pending"
              : " text-lg mr-6   font-bold"
          }
          to="/contacts"
        >
          {" "}
          SHOP
        </NavLink>
      </p>

      <NavLink className="w-11 relative" to={"/"}>
        <img src="bg-[#001c54]" alt="" />
        <p className=" bg-red-500 text-white  absolute top-[-8px] right-[-10px] rounded-full px-1">12</p>
      </NavLink>
    </>
  );

  return (
    <div id="navbar" className="navbar sticky top-0 z-40 px-[180px] h-[80px] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img className=" w-[250px]" src={navLogo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
      <details className="dropdown mr-10">
  <summary className="m-1 text-lg underline font-semibold cursor-pointer">Language</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
        <a className="= py-1 px-5 bg-transparent border-2 hover:bg-[#f99a00] hover:text-white text-2xl font-semibold text-[#f99a00] rounded-md border-[#f99a00]">Join US</a>
      </div>
    </div>
  );
};

export default Navbar;
