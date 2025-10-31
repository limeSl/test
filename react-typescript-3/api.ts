async function fetchUsers(): Promise<any> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

fetchUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
