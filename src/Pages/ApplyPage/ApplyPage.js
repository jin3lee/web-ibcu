import React from "react";

import ApplyBanner from './components/ApplyBanner.js';
import ApplyContent from './components/ApplyContent.js';

class ApplyPage extends React.Component {
  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            <ApplyBanner />
            <ApplyContent />
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
export default ApplyPage;
