import React from 'react';

function Table({item, todos, setTodos}) {
  const {text , id } = item
  console.log(todos);

  const handleEdit = (todoId) => {
    const editText = prompt("Please edit text")
    const findTodos= todos.find(e => e.id === id)
    findTodos.text = editText
    setTodos([...todos])
  }

  const handleDeleteTodo= (id)=> {
    const filtredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filtredTodo)
  }




  return (
    <div>
    <table className="table ms-5">
    <thead>
    <tr>

    </tr>
    </thead>
    <tbody>
    <tr>
    <th scope="row">{id}</th>
    <td className='w-50'><h4>{text}</h4></td>
    <td><button onClick={()=> handleEdit (id)} className='btn btn-primary'>Edit</button><button onClick={()=> handleDeleteTodo(id)} className='ms-2 btn btn-danger'>Delete</button></td>
    </tr>

    </tbody>
    </table>
    </div>
    );
  }

  export default Table;