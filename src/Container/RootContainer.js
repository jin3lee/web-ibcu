import React from "react";

import { connect } from 'react-redux';

// components
import HomePage from './../Pages/HomePage/HomePage.js';
import CampusPage from './../Pages/CampusPage/CampusPage.js';
import ApplyPage from './../Pages/ApplyPage/ApplyPage.js';
import { PAGE_ID_HOME, PAGE_ID_CAMPUS, PAGE_ID_APPLY } from './actionTypes';

// listeners
import PageDimensions from './../Components/PageDimensions/PageDimensions.js';

class RootContainer extends React.Component {

  render() {

    console.log("pageId: ", this.props.pageId);

    return(
      <div className="root-container-background" style={ style.rootContainerStyle }>

          <PageDimensions />

          { ( this.props.rootContainer.pageId === PAGE_ID_HOME ) && <HomePage /> }

          { ( this.props.rootContainer.pageId === PAGE_ID_CAMPUS ) && <CampusPage /> }

          { ( this.props.rootContainer.pageId === PAGE_ID_APPLY ) && <ApplyPage /> }

      </div>
    );
  }
}

const style = {
  rootContainerStyle:{
    backgroundColor: "white",
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
    pageDimensions: state.pageDimensions,
  };
};

export default connect( mapStateToProps )( RootContainer );
