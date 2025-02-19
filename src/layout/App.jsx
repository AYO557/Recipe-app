import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainNav from "../components/mono/main-nav";
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
      <MainNav onClick={logout} />

      <div className="bg-[#f8dede] col-span-5">
        <Outlet />
      </div>
    </main>
  );
}
