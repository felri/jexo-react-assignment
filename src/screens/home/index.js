import './style.scss';
import api from 'utils/api';
import { useState, useEffect } from 'react';
import Card from 'components/card';

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const data = await api.getUsers();
    setUsers(data);
  }

  function onLike({ id }) {
    let aux = [...users];
    const index = aux.map((f) => f.id).indexOf(id);
    if (index > -1) {
      aux[index].liked = aux[index].liked ? false : true;
      setUsers(aux);
    }
  }

  function onDelete({ id }) {
    let aux = [...users];
    const index = aux.map((f) => f.id).indexOf(id);
    if (index > -1) {
      aux.splice(index, 1);
      setUsers(aux);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container-home'>
      {users.length > 0 &&
        users.map((user) => (
          <Card
            onLike={() => onLike({ id: user.id })}
            onDelete={() => onDelete({ id: user.id })}
            user={user}
            key={user.id}
          />
        ))}
    </div>
  );
}

export default Home;
