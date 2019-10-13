import React from "react";

import clouds from '../../../assets/clouds_federalway.jpg';

class CampusAndTitle extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '6%', justifyContent:'bottom', marginTop:'6%', backgroundColor:'rgb(0,0,0,0.5)' }}>
          <div style={{ fontSize: '3em', fontWeight: 'bold', color: 'white', textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)' }}>
            FACULTY & STAFF
          </div>
          <div style={{ backgroundColor:'#0C54A3', height: 10, width: 200, marginTop: 15 }} />
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: 250,
    display: 'flex',
    alignItems: 'top',
    overflow: "hidden",
    backgroundSize: 'cover',
    justifyContent: 'left',
    backgroundPosition: 'top',
    backgroundImage: 'url(' + clouds + ')',
  }
}

export default CampusAndTitle;
