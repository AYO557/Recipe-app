import { FaHamburger } from "react-icons/fa";
import HomeHeader from "./components/home-header";
import FilterSection from "./components/fiter-section";
import RecipesSection from "./components/recipes-section";

export default function Home() {
  const filterItems = [
    { name: "Burger", icon: FaHamburger },
    { name: "Pizza", icon: FaHamburger },
    { name: "Fries", icon: FaHamburger },
    { name: "Shake", icon: FaHamburger },
    { name: "Drink", icon: FaHamburger },
    { name: "Dessert", icon: FaHamburger },
    { name: "Other", icon: FaHamburger },
  ];

  return (
    <article className="p-10">
      <HomeHeader />
      <FilterSection filterItems={filterItems} />

      <RecipesSection filterItems={filterItems} />
    </article>
  );
}
