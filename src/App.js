import React from 'react';
import About from './Components/About';
import Agent from './Components/Agent';
import Conatct from './Components/Conatct';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import Properties from './Components/Properties';


function App() {
  return (
    <div className="App">

     <Header/>
     <Howitwork/>
     <About/>
    <Agent/>
    <Properties/>
    <Conatct/>
    </div>
  );
}

export default App;
