import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';
import NotFound from './NotFound';

function Recipe() {
  const { id } = useParams();

  const recipe = recipesData.recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <main>
      <h1>{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} />

      <h2>Ingrédients</h2>

      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <h2>Étapes</h2>

      <ol>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </main>
  );
}

export default Recipe;