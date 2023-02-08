import React, { useState, useEffect }from "react";
import axios from 'axios'; 

const App = () => {
  const url = 'https://valorant-api.com/v1/playercards'
  const [cards, setCards] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataLength, setDataLength] = useState(0); 
  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setCards(response.data);
        setError(null);
        setDataLength(response.data.length);
      } catch (err) {
        setError(err.message);
        setCards(null);
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
        {cards.data[0] &&
            <div>
              <button>Left</button>
              <div className="middle">
                <li>
                  <img src={cards.data[counter].displayIcon} alt="joemama"></img>
                </li>
              </div>
            <button onClick={()=>setCounter(counter+1)}>Right</button>
            </div>
          }
      </ul>
    </div>
  );
}


export default App