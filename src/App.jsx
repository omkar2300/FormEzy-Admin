
import {  Routes, Route } from 'react-router-dom'
import Form from './components/form'
import Dashboard from './components/dashboard'
import Responses from './components/responses'

function App() {
  

  return (
    <>

     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/responses' element={<Responses/>}></Route>
     </Routes>
  
      
    </>
  )
}

export default App
