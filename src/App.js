
import './App.css';
import LogIn from './Components/Login/login';
import Register from './Components/Register/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return <BrowserRouter>
 <div className='container'>
 <Routes>
  <Route exact path='/' element={<Register/>}/>
  <Route exact path='/login' element={<LogIn/>}/>
  </Routes>
 </div>
  
  
  
  </BrowserRouter>
}

export default App;
