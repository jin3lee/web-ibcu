import React from "react";

import AcademicsBanner from './components/AcademicsBanner.js';
import AcademicsContent from './components/AcademicsContent.js';

class AcademicsPage extends React.Component {
  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <AcademicsBanner />
            <AcademicsContent />
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
export default AcademicsPage;
