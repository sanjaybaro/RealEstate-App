import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-amber-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-amber-500">Global</span>
            <span className="text-amber-700">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-amber-800" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-amber-800 hover:bg-slate-200">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-amber-800 hover:bg-slate-200">
              About
            </li>
          </Link>

          <Link to="/signin">
            <li className=" text-amber-800 hover:bg-slate-200">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
