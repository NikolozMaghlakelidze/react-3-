import React from 'react'

const userebi = () => {
  const momxmareblebi = [];
  for (let i = 0; i < 10; i++) {
    momxmareblebi.push({ id: i, name: `User ${i + 1}` });
  }
  return momxmareblebi;
};

const App = () => {
  const [momxmareblebi, ganaxlebuliuserebi] = useState(userebi());

  useEffect(() => {
    document.title = `${momxmareblebi.length} users left`;
  }, []);

  const randomuserebi = () => {
    const rendomi = Math.floor(Math.random() * momxmareblebi.length);
    const newUsers = [...momxmareblebi];
    newUsers.splice(rendomi, 1);
    ganaxlebuliuserebi(newUsers);
  };

  return (
    <div>
      <ul>
        {momxmareblebi.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={randomuserebi}>Remove random user</button>
    </div>
  );
};

export default App;