import { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

const Header = ({ theme }) => {
  const [toggle, setToggle] = useState(localStorage.getItem("theme") == "dark");
  useEffect(() => {
    if (toggle == true) {
      localStorage.setItem("theme", "dark");
      theme("dark");
    } else {
      localStorage.setItem("theme", "light");
      theme("light");
    }
  }, [toggle]);
  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div className="flex bg-slate-200 text-black dark:bg-slate-600 dark:text-white p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search game.."
          className="px-2 bg-transparent outline-none "
        />
      </div>
      <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
        {toggle ? (
          <HiMoon className="text-[35px] bg-slate-200 text-black dark:bg-slate-600 dark:text-white p-1 rounded-full" />
        ) : (
          <HiSun className="text-[35px] bg-slate-200 text-black dark:bg-slate-600 dark:text-white p-1 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Header;
