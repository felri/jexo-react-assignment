async function getUsers() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users', {
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
