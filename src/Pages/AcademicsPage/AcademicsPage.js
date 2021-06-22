import React from "react";

// Router
import { 
  Switch, 
  Route,
} from 'react-router-dom';
import { Link } from "react-router-dom";

import AcademicsBanner from './components/AcademicsBanner.js';
import AcademicsContent from './components/AcademicsContent.js';
import spAttendancePolicy from './components/AttendancePolicyPage';

class AcademicsPage extends React.Component {

  render() {

    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <AcademicsBanner />
            <Switch>
              <Route path="/academics" exact component={ AcademicsContent } />
            </Switch>
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
