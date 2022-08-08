import React, { useEffect, useState } from 'react';


function Api() {
const [data, setData] = useState([])

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data)=> setData(data))
  .catch((err)=> alert("eror"))
},[])


  return (
    <div>
      <ul>
        {data.length >0 && data.map((e)=> {
            <li key={e.id}>{e.title}</li>
          })
        }
      </ul>

    </div>
  );
}

export default Api;