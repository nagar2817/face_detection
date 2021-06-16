import React from "react";
import './App.css';
import Navigation from "./Compoenent/navigation/navigation";
import Logo from "./Compoenent/logo/logo";
import LinkForm  from "./linkForm/linkForm";
import Rank from "./Rank";
import Particles from 'react-particles-js';

const PartcileOptions = {
  particles: {
    number: {
        value: 150,
        density: {
          "enable" :true,
          "value_area":1000
        } 
    }
}
}

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Particles className="particle" params={PartcileOptions} />
          <Navigation />
          <Logo />
          <Rank/>
          <LinkForm />
      </div>
    );
  }
  
}

export default App;
