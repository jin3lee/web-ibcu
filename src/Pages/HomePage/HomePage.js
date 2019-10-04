import React from "react";

// import './../styles.css';
import Header from './../../Components/Header.js';
import Footer from './../../Components/Footer.js';

import Kickstarter from './components/Kickstarter.js';
import StartQuote from './components/StartQuote.js';

class HomePage extends React.Component {

  /*NOT AVAILABLE FEATURES*/
  // <Kickstarter />
  // <RegisterNewsLetter />

  render() {
    // console.log("width: " + this.props.moduleWidth + "  and height: " + this.props.moduleHeight);
    // <div style={{ background: 'linear-gradient(to bottom,  rgb(0, 0, 0) , rgb(0, 0, 60))' }}>
    //   <Footer />
    // </div>
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <Header />
            <Kickstarter />
            <StartQuote />
            <Footer />
          </div>
      </div>
    );
  }
}

const style = {
  homePageStyle:{
    backgroundColor: "#1A9AED",
  },
}
export default HomePage;
