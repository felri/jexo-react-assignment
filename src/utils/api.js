async function getUsers() {
  try {
    const result = await fetch(process.env.REACT_APP_DEFAULT_URL + '/users', {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default {
  getUsers,
};
