import './style.css';
import api from 'utils/api';
import { useState, useEffect } from 'react';
import Card from 'components/card';

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const data = await api.getUsers();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container-home'>
      {users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}
    </div>
  );
}

export default Home;
