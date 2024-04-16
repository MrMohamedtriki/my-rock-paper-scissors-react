import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import First from './components/First';
import About from './components/About';
import Home from  './components/Home';
import Navbar from './components/Navbar'; 
import Body from './components/Body';
import {useState} from 'react';

function App() {
  const [shownPage,setShownPage]= useState("RPS");
  console.log(shownPage);
  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-lg-9">
          <First />
          {shownPage=="RPS" &&
            <h2>
              <Body/>
            </h2>
          }
          {shownPage=="About" &&
            <h2>
              <About/>
            </h2>
          }
          {shownPage=="Home" &&
            <h2>
              <Home/>
            </h2>
          }
        </div>

        <div className="col-lg-3">
          <Navbar props={setShownPage}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
