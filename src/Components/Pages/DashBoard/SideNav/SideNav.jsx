import { NavLink } from "react-router-dom";
import { BiCart, BiHomeAlt, BiComment, BiSolidShoppingBag } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { BsCalendarDay, BsWallet2 } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";

const SideNav = () => {
  return (
    <div>
      <ul className="menu space-y-3">
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/userHome">
            <BiHomeAlt className="text-2xl" />
            User Home
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/reservation">
            <BsCalendarDay className="text-2xl" />
            Reservation
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/payment">
            <BsWallet2 className="text-2xl" />
            Payment History
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/cart">
            <BiCart className="text-2xl" />
            My Cart
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/review">
            <BiComment className="text-2xl" />
            Add Review
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/booking">
            <TfiMenuAlt className="text-2xl" />
            My Booking
          </NavLink>
        </li>


        <div className="divider"></div>

        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/">
            <BiHomeAlt className="text-2xl" />
            Home
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/booking">
            <HiMenu className="text-2xl" />
            Menu
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/booking">
            <BiSolidShoppingBag className="text-2xl" />
            Shop
          </NavLink>
        </li>
        <li className="text-xl hover:scale-105 duration-500">
          <NavLink to="/dashBoard/booking">
            <FiMail className="text-2xl" />
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
