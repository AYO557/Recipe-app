import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.user;

    if (!user) {
      localStorage.clear();
      navigate("/auth");
      return;
    }
  }, []);

  return (
    <div className="h-screen bg-blue-400 text-white">
      <h1>Welcome to the Application :)</h1>
    </div>
  );
}
