import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Registerpage from './pages/registerpage';
import Loginpage from './pages/loginpage';
import Viewpage from './pages/viewpage';
import Test1 from './pages/test1';
import Editpg from "./pages/editpg";





function App(){
  return (

      <div className="App">

        <Router>

          <Routes>

            <Route exact path="/register" element={<Registerpage/>}/>
            <Route exact path="/" element={<Loginpage/>}/>

            <Route exact path="/testpg" element={<Test1/>}/>
            <Route exact path="/viewpg/:id" element={<Viewpage/>}/>
             <Route exact path="/edituser/:id" element={<Editpg/>}/>

          </Routes>
        </Router>
      </div>

    

  );
}
export default App;
