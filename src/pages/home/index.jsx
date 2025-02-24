import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHamburger } from "react-icons/fa";
import HomeHeader from "./components/home-header";
import FilterSection from "./components/fiter-section";
import RecipesSection from "./components/recipes-section";

export default function Home() {
  const [recipes, setRecipes] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://localhost:3000/all-recipe");
        if (!response.ok) {
          navigate("/auth");
        }
        const data = await response.json();
        setTimeout(() => {
          setRecipes(data);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <article className="p-10 h-full">
      <HomeHeader />
      <FilterSection filterItems={recipes} />

      <RecipesSection filterItems={recipes} />
    </article>
  );
}
