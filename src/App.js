
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './bai32/Register';
import Login from './bai32/Login';
import A from './bai31/A';
import C from './bai31/C';


function App() {
    return (
        <div>
           <Router>
  
  <Routes>
    <Route  path='/login' element={<Login/>}/>
    <Route exact path='/' element={<Register/>}/>
  </Routes>
</Router>
        </div>
    )
}

export default App;
