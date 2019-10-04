import React from "react";

import { connect } from 'react-redux';

// components
import HomePage from './../Pages/HomePage/HomePage.js';

// listeners
import PageDimensions from './../Components/PageDimensions/PageDimensions.js';
import { PAGE_ID_HOME } from './actionTypes';

class RootContainer extends React.Component {
  render() {
    console.log("pageDimensions: ", this.props);
    return(
      <div className="root-container-background" style={ style.rootContainerStyle }>

          <PageDimensions />

          { (this.props.rootContainer.pageId === PAGE_ID_HOME) && <HomePage /> }

      </div>
    );
  }
}

const style = {
  rootContainerStyle:{
    backgroundColor: "#1A9AED",
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
    pageDimensions: state.pageDimensions,
  };
};

export default connect( mapStateToProps )( RootContainer );
