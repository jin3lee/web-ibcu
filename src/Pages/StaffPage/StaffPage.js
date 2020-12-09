import React from "react";

// import './../styles.css';
import Header from './../../Components/Header.js';
import Footer from './../../Components/Footer.js';
import Navigater from './../../Components/Navigater/Navigater.js';
import StaffAndTitle from './components/StaffAndTitle.js';
import StaffContent from './components/StaffContent.js';

class StaffPage extends React.Component {
  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <StaffAndTitle />
            <StaffContent />
          </div>
      </div>
    );
  }
}

const style = {
  homePageStyle:{
    backgroundColor: "white",
  },
}
export default StaffPage;
