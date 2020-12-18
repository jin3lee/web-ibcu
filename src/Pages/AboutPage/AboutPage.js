import React from "react";

import AboutBanner from './components/AboutBanner.js';
import AboutContent from './components/AboutContent.js';
import AboutGoal from './components/AboutGoal.js';
import AboutProcess from './components/AboutProcess.js';
import AboutCoreValue from './components/AboutCoreValue.js';
import AboutBelief from './components/AboutBelief.js';

class AboutPage extends React.Component {
  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <AboutBanner />
            <AboutContent />
            <AboutGoal />
            <AboutProcess />
            <AboutCoreValue />
            <AboutBelief />
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
export default AboutPage;
