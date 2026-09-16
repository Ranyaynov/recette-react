import usersData from '../data/users.json';

function Users() {
  return (
    <main>
      <h1>Utilisateurs</h1>

      <ul>
        {usersData.users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </main>
  );
}

export default Users;