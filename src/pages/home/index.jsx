import HomeHeader from "./components/home-header";
import FilterSection from "./components/fiter-section";
import RecipesSection from "./components/recipes-section";
import { useRecipes } from "../../hooks/useRecipes";
import Loader from "../../components/basic/loader";

export default function Home() {
  // const [recipes, setRecipes] = useState(null);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await fetch("http://localhost:3000/all-recipe");
  //       if (!response.ok) {
  //         navigate("/auth");
  //       }
  //       const data = await response.json();
  //       setTimeout(() => {
  //         setRecipes(data);
  //       }, 2000);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  const { data: recipes, isPending, isError, error } = useRecipes();

  if (isPending) return <Loader />;

  if (isError) return <div>{error.message}</div>;

  return (
    <article className="p-10 h-full">
      <HomeHeader />
      <FilterSection filterItems={recipes} />

      <RecipesSection filterItems={recipes} />
    </article>
  );
}
