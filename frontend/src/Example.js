import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await ((await fetch('/api')).json())
      setData(response);
    }
    // await fetch('/api')
    // .then(responce => responce.json())
    // .then(responce => setData(responce));
    fetchData();
    
  }, []);
  console.log(data);
  return (
    <div className="App">
      <ul>
        {/* {
          !data ? "Loading..." : data
        } */}
        {
          !data ? "Loading..." : 
          data.map((user) => {
            return(
              <li key={user.id}>{user.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
