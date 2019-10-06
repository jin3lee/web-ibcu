import React from "react";

import imageTree from '../../../assets/washington_tree_mountain.jpg';

class ExperienceGallery extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '6%' }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, fontSize: '1.5em', color: '#0C54A3', fontWeight: 'bold', backgroundColor:"#E4EBF3", paddingLeft: 15, paddingRight: 15, paddingTop:8, paddingBottom:8 }}>
              #IbcuExperience
            </div>
            <div style={{ flex: 1.5 }}/>
          </div>
          <div style={{ fontSize: '4em', fontWeight: 'bold', color: 'white' }}>
            Hiking Mountains
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: 450,
    display: 'flex',
    overflow: "hidden",
    alignItems: 'top',
    justifyContent: 'left',
    backgroundPosition: 'center',
    backgroundImage: 'url(' + imageTree + ')',
  }
}

export default ExperienceGallery;
