import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/users.json';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const user = usersData.users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (user) {
      navigate(`/profile/${user.id}`);
    } else {
      console.log('Identifiants incorrects');
    }
  }

  return (
    <main>
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label>
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button type="submit">Se connecter</button>
      </form>
    </main>
  );
}

export default Login;