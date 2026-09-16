import { useParams } from 'react-router-dom';
import usersData from '../data/users.json';
import NotFound from './NotFound';

function User() {
  const { id } = useParams();

  const user = usersData.users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return <NotFound />;
  }

  return (
    <main>
      <img src={user.image} alt={user.username} />
      <h1>{user.username}</h1>
    </main>
  );
}

export default User;