import React from "react";

import { connect } from 'react-redux';

// header & footer & navigator
import Header from './../Components/Header.js';
import Footer from './../Components/Footer.js';
import Navigater from './../Components/Navigater/Navigater.js';

// paths
import HomePage from './../Pages/HomePage/HomePage.js';
import CampusPage from './../Pages/CampusPage/CampusPage.js';
import ApplyPage from './../Pages/ApplyPage/ApplyPage.js';
import AboutPage from './../Pages/AboutPage/AboutPage.js';
import AcademicsPage from './../Pages/AcademicsPage/AcademicsPage.js';
import StaffPage from './../Pages/StaffPage/StaffPage.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  PAGE_ID_HOME,
  PAGE_ID_CAMPUS,
  PAGE_ID_APPLY,
  PAGE_ID_ABOUT,
  PAGE_ID_ACADEMICS,
  PAGE_ID_STAFF
} from './actionTypes';

// listeners
import PageDimensions from './../Components/PageDimensions/PageDimensions.js';

class RootContainer extends React.Component {

  render() {

    return(
      <div className="root-container-background" style={ style.rootContainerStyle }>

          <Router>
            <PageDimensions />
            <Header />
            <Navigater />
              <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/home" exact component={ HomePage } />
                <Route path="/about" exact component={ AboutPage } />
                <Route path="/academics" exact component={ AcademicsPage } />
                <Route path="/apply" exact component={ ApplyPage } />
                <Route path="/campus" exact component={ CampusPage } />
                <Route path="/staff" exact component={ StaffPage } />
              </Switch>
            <Footer disableWhiteBuffer={ true } />
          </Router>
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
