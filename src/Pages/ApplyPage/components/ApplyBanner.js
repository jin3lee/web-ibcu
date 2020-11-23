import React from "react";

import federalWayPondImage from '../../../assets/FederalWayPond.jpg';

class ApplyBanner extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '10%', justifyContent:'bottom', marginTop:'5%' }}>
          <div style={{ fontSize: '3em', fontWeight: 'bold', color: 'white', textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)' }}>
            APPLY TO THE WASHINGTON INTERNATIONAL<br />MISSION UNIVERSITY
          </div>
          <div style={{ backgroundColor:'#0C54A3', height: 10, width: 200, marginTop: 15 }} />
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: 350,
    display: 'flex',
    alignItems: 'top',
    overflow: "hidden",
    backgroundSize: 'cover',
    justifyContent: 'left',
    backgroundPosition: 'center',
    backgroundImage: 'url(' + federalWayPondImage + ')',
  }
}

export default ApplyBanner;
