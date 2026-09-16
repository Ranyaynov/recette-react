import { useParams } from 'react-router-dom';
import usersData from '../data/users.json';

function Profile() {
  const { id } = useParams();

  const user = usersData.users.find(
    (user) => user.id === Number(id)
  );

  return (
    <main>
      <h1>{user?.firstName} {user?.lastName}</h1>
    </main>
  );
}

export default Profile;