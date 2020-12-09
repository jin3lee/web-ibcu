import React from "react";

import imageTree from '../../../assets/washington_tree_mountain.jpg';

class ExperienceGallery extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ marginLeft: '6%' }}>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, fontSize: '1.5em', color: '#0C54A3', fontWeight: 'bold', fontStyle: 'italic', backgroundColor:"#E4EBF3", paddingLeft: 15, paddingRight: 15, paddingTop:8, paddingBottom:8 }}>
              #WimuExperience
            </div>
            <div style={{ flex: 1.5 }}/>
          </div>
          <div style={{ fontSize: '4em', fontWeight: 'bold', color: 'white' }}>
            Live your calling.
          </div>
          <div style={{ backgroundColor:'#0C54A3', height: 10, width: 200, marginTop: 15 }} />
          <div style={{
            color: 'white',
            fontSize: '1em',
            fontWeight: 'bold',
            fontStyle: 'Italic',
            fontFamily: 'Avenir',
            backgroundColor: 'rgba(52, 67, 82, 0.4)',
            width: 400,
            marginTop: 25,
          }}>
            The Lord said, “Go out and stand on the mountain in the presence of the Lord, for the Lord is about to pass by.” - 1 Kings 19:11
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
