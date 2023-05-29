import { NavLink } from "react-router-dom";
import logo from "../assets/Logo2.png";

export const Header = () => {
  return (
    <header className="bg-primaryColor text-white flex flex-col">
      <hgroup className="flex items-center">
          <img src={logo} alt="" width={100} />
          <p className="font-semibold text-4xl ">ITLand</p>
          <div className=" w-[70%] flex justify-center">
          <p className="font-bold text-3xl ">
            Dashboard
          </p>
          </div>
      </hgroup>
      <nav className="flex justify-center "  >
        <ul className="flex gap-3">
          <li className="p-2">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
