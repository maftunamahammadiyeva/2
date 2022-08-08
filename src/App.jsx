import {  useState , createContext } from 'react'
import Sitebar from './contents/Sitebar/Sitebar'
import Main from './contents/Main/Main'
import Api from './contents/Api/Api'
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {


  return (
    <div className='container d-flex'>

   <BrowserRouter>
   <Sitebar/>
   <Routes>

    <Route path="/" element={<Main/>} />
    <Route path='/api' element={<Api/>}/>
   </Routes>
   </BrowserRouter>
    </div>
    )
  }

  export default App
