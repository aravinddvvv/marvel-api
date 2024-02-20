import React from 'react';
import { Main } from './Components/Main';
import './Components/style.css';
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom'
import { Marvel } from './Components/Marvel';





function App() {
  return (
    <>
    <Header/>
 <Routes>
       <Route path='/'element={<Main/>}/>
       <Route path='/:id' element={<Marvel/>}/>
     </Routes>
    
    </>
  )
}

export default App;
