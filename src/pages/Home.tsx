import { Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function Home() {
  return (
    <main>
      <h1>Ranya Aitgaghou</h1>

      <div>
        {recipesData.recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
            </Link>

            <p>Préparation : {recipe.prepTimeMinutes} min</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;