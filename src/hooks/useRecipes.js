import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/getRecipes";

export const useRecipes = () =>
  useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });
