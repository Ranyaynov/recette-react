import { Link } from 'react-router-dom';
import usersData from '../data/users.json';

function Users() {
  return (
    <main>
      <h1>Utilisateurs</h1>

      <ul>
        {usersData.users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Users;