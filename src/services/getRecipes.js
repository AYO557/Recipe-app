// get all recipes
export const getRecipes = async () => {
  const response = await fetch("http://localhost:3000/all-recipe");
  if (!response.ok) {
    console.log(response);
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
