import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Personaldetails from './components/personaldetailspage/personaldetails';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [ user, setLoginUser] = useState({})
  const[personaldetails,setpersonaldetails]=useState({})
    return (
    <div className="App">
      <Router>
        
        
        <Routes>
          <Route exact path="/"element= {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }>
           
          </Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/personaldetails" element={<Personaldetails setpersonaldetails={setpersonaldetails}/>} />

                 
      </Routes>
      
      </Router>
    </div>
  )
}

export default App;