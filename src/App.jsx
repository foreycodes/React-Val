import React, { useState, useEffect }from "react";
import axios from 'axios'; 


const baseURL = "https://valorant-api.com/v1/playercards";
const App = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://valorant-api.com/v1/playercards`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>APi</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.data.map(({ uuid, largeArt }) => (
            <li key={uuid}>
              <img src={largeArt}></img>
            </li>
          ))}
      </ul>
    </div>
  );
}


export default App