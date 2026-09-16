import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function Recipe() {
  const { id } = useParams();

  const recipe = recipesData.recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  return (
    <main>
      <h1>{recipe?.name}</h1>
      <img src={recipe?.image} alt={recipe?.name} />
    </main>
  );
}

export default Recipe;