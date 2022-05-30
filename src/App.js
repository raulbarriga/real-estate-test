import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('https://hn.algolia.com/api/v1/search?query=redux');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  
console.log(data)

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default App;
