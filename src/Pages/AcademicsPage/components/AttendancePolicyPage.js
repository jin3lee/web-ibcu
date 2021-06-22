import React from "react";

import AcademicsBanner from './AcademicsBanner.js';

class AttendancePolicyPage extends React.Component {

  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <AcademicsBanner />
            <div>Attendance Policy Content</div>
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
export default AttendancePolicyPage;
