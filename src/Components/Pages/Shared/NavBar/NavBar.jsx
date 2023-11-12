import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/assets/logo.png';
import { BiSolidUser, BiSolidCart } from 'react-icons/bi';

const NavBar = () => {
    
//Dynamic navLinks 
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-600 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-600 font-bold" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-600 font-bold" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourMenu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-600 font-bold" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/orderFood/Salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-600 font-bold" : ""
          }
        >
          Order Food
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white md:fixed z-10 bg-black md:bg-opacity-60">
        <div className="navbar container mx-auto lg:py-5">
      <div className="navbar-start">
        <Link to='/'>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-12 lg:w-16" src={logo} alt="" />
              </div>
            <div>
            <h1 className="lg:text-2xl font-bold">Bistro Boss</h1>
            <p className="lg:text-lg font-medium lg:tracking-[4px] text-orange-600">Restaurant</p>
            </div>
            </div>
        </Link>
      </div>
      <div className="navbar-end lg:w-full">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="flex gap-5 text-2xl lg:ml-16 mr-5 lg:mr-0">
          <BiSolidCart className="cursor-pointer" />
          <Link to='/login'><BiSolidUser className="cursor-pointer" /></Link>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 text-black z-10"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
