import React from 'react';
import Logo from "../../assets/Logo.svg"
import Todo  from "../../assets/todo.svg"
import Api from "../../assets/API.svg"
import './sitebar.css'
import {Link} from "react-router-dom"

function Sitebar(props) {
  return (
    <div className='sitebar w-25 p-4'>
      <img className='mb-4' src={Logo} alt="logo" width="34" height="38"  />
      <ul className='border-top '>
        <li className='d-flex align-items-center mt-4'>
          <img src={Todo} alt="icon" width="24" height='24' />
          <Link className='text-decoration-none ms-3 text-dark fw-bold' to="/">Todo</Link>
        </li>
        <li className='d-flex align-items-center mt-3'>
          <img src={Api} alt="icon" width="24" height='24'/>
          <Link className='text-decoration-none ms-3 text-dark fw-bold' to="api">API</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sitebar;