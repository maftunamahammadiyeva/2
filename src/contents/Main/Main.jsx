import React, { useState } from 'react';
import Table from '../Table/Table';

function Main(props) {

  const [todos, setTodos] = useState([])
  const handleInputvalue = (evt) => {
   if(evt.keyCode === 13){

    let newTodo = {
      id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
      text: evt.target.value ,
      isComplited: false
    }
    setTodos([...todos, newTodo]);
    evt.target.value = null

   }
  }


  return (
    <div className='w-75'>
      <div className='d-flex justify-content-center mt-5 mb-3'>
        <h1>Todo List</h1>
        <input className='w-50 ms-5 me-5' onKeyUp={handleInputvalue} type="text" placeholder='Enter your todos..' />
        <button className='btn btn-info'>Add</button>
      </div>
      {
        todos.map(e => (
          <Table todos={todos} setTodos={setTodos} key={e.id} item={e}/>
        ))
      }

    </div>
  );
}

export default Main;