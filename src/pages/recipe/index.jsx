import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipe } = useParams();

  return <div>{recipe} Recipe</div>;
}
