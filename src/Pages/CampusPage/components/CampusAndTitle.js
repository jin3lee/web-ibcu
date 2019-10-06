import React from "react";

import campusImage from '../../../assets/campusImage.png';

class CampusAndTitle extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '6%', alignItems:'bottom', justifyContent:'bottom', marginTop: "10%" }}>
          <div style={{ fontSize: '3em', fontWeight: 'bold', color: 'white', textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)' }}>
            Discover International Bible College & University
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
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundImage: 'url(' + campusImage + ')',
  }
}

export default CampusAndTitle;
