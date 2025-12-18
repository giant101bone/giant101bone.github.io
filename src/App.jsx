import { Routes , Route } from 'react-router-dom'
import './App.css'
import Login from './ Pages/login'
import Dashboard from './ Pages/dashboard'


function App() {

  
                                                           
  return (
    <>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='Dashboard' element = { <Dashboard/>} />
    </Routes>

    </>
  )
}

 
export default App ;
