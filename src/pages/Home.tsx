import { useParams } from 'react-router-dom';

function Recipe() {
  const { id } = useParams();

  return (
    <main>
      <h1>Détail de la recette</h1>
      <p>ID de la recette : {id}</p>
    </main>
  );
}

export default Recipe;