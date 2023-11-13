import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/assets/logo.png";
import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [cart] = useCart();


  const handelLogout = () =>{
    userLogout()
    .then(() =>{

    })
    .catch(err =>{
      console.log(err);
    })
  }

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
          <Link to="/">
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <img className="w-12 lg:w-16" src={logo} alt="" />
              </div>
              <div>
                <h1 className="lg:text-2xl font-bold">Bistro Boss</h1>
                <p className="lg:text-lg font-medium lg:tracking-[4px] text-orange-600">
                  Restaurant
                </p>
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
          <div className="flex items-center gap-5 text-3xl lg:ml-8 lg:mr-0">
            <div className="relative">
            <Link to='/dashBoard/cart'><BiSolidCart className="cursor-pointer" /></Link>
            <div className="badge absolute w-8 -top-1 -right-6 bg-blue-500 outline-none border-none text-white">+{cart.length}</div>
            </div>
            {user ? (
              <>
                <div className="dropdown dropdown-end dropdown-bottom flex items-center lg:gap-1 text-lg text-black p-1 lg:p-2 rounded-full bg-white ml-4 lg:ml-5">
                  <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-8 lg:w-10 rounded-full">
                      <img src={(user?.photoURL)? user?.photoURL : 'https://johannesippen.com/img/blog/humans-not-users/header.jpg'} />
                    </div>
                  </div>
                  <h1 className="text-xs lg:text-base">
                    {user?.displayName}
                  </h1>
                  </div>
                  <BiChevronDown tabIndex={0} className="text-2xl lg:text-3xl cursor-pointer mr-1" />
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] mt-5 menu p-2 shadow bg-base-100 rounded-box w-36 lg:w-52 space-y-2"
                  >
                    <li>
                      <button>Update Profile</button>
                    </li>
                    <li>
                      <button onClick={handelLogout} className="bg-blue-400 text-white">Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link className="mr-5" to="/login">
                <BiSolidUser className="cursor-pointer" />
              </Link>
            )}
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
