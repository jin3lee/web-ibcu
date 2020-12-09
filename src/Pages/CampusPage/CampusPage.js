import React from "react";

import CampusAndTitle from './components/CampusAndTitle.js';
import CampusContent from './components/CampusContent.js';

class CampusPage extends React.Component {
  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <CampusAndTitle />
            <CampusContent />
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
export default CampusPage;
