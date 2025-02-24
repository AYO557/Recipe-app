import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipeId } = useParams();
  console.log(recipeId);

  //http://localhost:3000/all-recipe/${recipeId}

  return (
    <div className="font-bold text-4xl text-center bg-red-300">
      {recipeId} Recipe
    </div>
  );
}
