import React from "react";

import imageTree from '../../../assets/washington_tree_mountain.jpg';

class ExperienceGallery extends React.Component {

  render() {
    return(
      <div style={ style.container }>
      </div>
    );
  }
}

const style = {
  container: {
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    height: 450,
    backgroundImage: 'url(' + imageTree + ')',
    backgroundPosition: 'center',
  }
}

export default ExperienceGallery;
