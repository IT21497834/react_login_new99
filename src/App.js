import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Registerpage from './pages/registerpage';
import Loginpage from './pages/loginpage';





function App(){
  return (

      <div className="App">

        <Router>

          <Routes>

          
            <Route exact path="/register" element={<Registerpage/>}/>
            <Route exact path="/" element={<Loginpage/>}/>

          </Routes>
        </Router>
      </div>

      // <Registerpage/>

  );
}
export default App;
