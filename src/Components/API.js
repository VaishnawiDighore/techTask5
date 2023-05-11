import React, { useState, useEffect } from 'react';

const API = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error(error)
            setError(error);
          }
        }
    
        fetchData();
      }, []);
    
      if (error) {
        return <div>Error: data not found {error.message}</div>;
      } else if (!data) {
        return <div>Loading...</div>;
      } else {
        return (
          <ol>
            {data.map(item => (
              <li key={item.id}>
                {item.name},{item.username}
              </li>
            ))}
          </ol>
        );
      }
    }


export default API
