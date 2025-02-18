import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import ay_icon from "/brand"

export default function App() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  useEffect(() => {
    const user = localStorage.user;

    if (!user) {
      localStorage.clear();
      navigate("/auth");
      return;
    }
  }, []);

  return (
    <main className="h-screen grid grid-cols-6">
      <aside className="bg-[#892121] py-10 flex flex-col justify-between items-center">
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
            <li className="bg-white py-5 pl-5 rounded-2xl text-[#892121] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="py-5 pl-5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-2xl">
              <Link to="/about">About</Link>
            </li>
            <li className="py-5 pl-5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-2xl">
              <Link to="/contact">Contact</Link>
            </li>
          </menu>
        </nav>
        <button
          onClick={logout}
          className="font-bold w-[80%] text-2xl text-[#892121] pl-5 bg-red-100 py-5 rounded-2xl hover:bg-[#bb5e5e] cursor-pointer"
        >
          Log Out
        </button>
      </aside>

      <div className="bg-[aliceblue] col-span-5"></div>
    </main>
  );
}
