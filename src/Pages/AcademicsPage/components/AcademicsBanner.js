import React from "react";

import library from '../../../assets/library.jpg';

class AcademicsBanner extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '10%', display:'flex', alignItems: 'center' }}>
          <div style={{ fontSize: '3em', fontWeight: 'bold', color: 'white', textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)' }}>
            ACADEMICS AT ICBU
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: 170,
    display: 'flex',
    alignItems: 'top',
    overflow: "hidden",
    backgroundSize: 'cover',
    justifyContent: 'left',
    backgroundPosition: 'bottom',
    backgroundImage: 'url(' + library + ')',
  }
}

export default AcademicsBanner;
