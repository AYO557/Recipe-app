import { NavLink } from "react-router-dom";

export default function MainNav({ onClick }) {
  return (
    <aside className="bg-[#892121] py-10 flex flex-col justify-between items-center border-r-4 border-[#ee8a8a]">
      <nav className="px-5 py-10 w-full flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="h-20 w-28">
            <img
              src={"/brand_icon.png"}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <h1 className="font-bold text-4xl text-white tracking-widest cursor-pointer hover:scale-110 transition-all duration-300">
            AyRecipe
          </h1>
        </div>

        <menu className="flex flex-col gap-1 pt-10 text-2xl font-medium text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-5 pl-5 rounded-2xl ${
                isActive
                  ? "bg-white text-[#892121] font-bold"
                  : "hover:bg-[rgba(255,255,255,0.3)]"
              }`
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-5 pl-5 rounded-2xl ${
                isActive
                  ? "bg-white text-[#892121] font-bold"
                  : "hover:bg-[rgba(255,255,255,0.3)]"
              }`
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `py-5 pl-5 rounded-2xl ${
                isActive
                  ? "bg-white text-[#892121] font-bold"
                  : "hover:bg-[rgba(255,255,255,0.3)]"
              }`
            }
          >
            <li>Favorites</li>
          </NavLink>
        </menu>
      </nav>
      <button
        onClick={onClick}
        className="font-bold w-[80%] text-2xl text-[#892121] pl-5 bg-red-100 py-5 rounded-2xl hover:bg-[#bb5e5e] cursor-pointer"
      >
        Log Out
      </button>
    </aside>
  );
}
