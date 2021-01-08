import React from "react";

import { connect } from 'react-redux';

// header & footer & navigator
import Header from './../Components/Header.js';
import Footer from './../Components/Footer.js';
import Navigator from './../Components/Navigator/Navigator.js';

// paths
import HomePage from './../Pages/HomePage/HomePage.js';
import CampusPage from './../Pages/CampusPage/CampusPage.js';
import ApplyPage from './../Pages/ApplyPage/ApplyPage.js';
import AboutPage from './../Pages/AboutPage/AboutPage.js';
import AcademicsPage from './../Pages/AcademicsPage/AcademicsPage.js';
import StaffPage from './../Pages/StaffPage/StaffPage.js';
import StaffDetail from './../Pages/StaffPage/components/StaffDetail.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// listeners
import PageDimensions from './../Components/PageDimensions/PageDimensions.js';


import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class RootContainer extends React.Component {

  render() {

    return(
      <div className="root-container-background" style={ style.rootContainerStyle }>

          <Router>
            <PageDimensions />
            
            <div style={{ display: 'flex', flexDirection: 'row' }}>

              <div>
                <ProSidebar>
                  <Menu iconShape="square">
                      <MenuItem>HOME</MenuItem>
                      <MenuItem>ABOUT</MenuItem>
                      <MenuItem>ACADEMICS</MenuItem>
                      <MenuItem>APPLY</MenuItem>
                      <MenuItem>CAMPUS</MenuItem>
                      <MenuItem>FACULTY & STAFF</MenuItem>
                    
                      <SubMenu title="SETTINGS">
                        <SubMenu title="Language">
                          <MenuItem>English</MenuItem>
                          <MenuItem>Korean</MenuItem>
                        </SubMenu>
                      </SubMenu>
                  </Menu>
                </ProSidebar>
              </div>

              <div>
                <Header />
                <Navigator />
                  <Switch>
                    <Route path="/" exact component={ HomePage } />
                    <Route path="/home" exact component={ HomePage } />
                    <Route path="/about" exact component={ AboutPage } />
                    <Route path="/academics" exact component={ AcademicsPage } />
                    <Route path="/apply" exact component={ ApplyPage } />
                    <Route path="/campus" exact component={ CampusPage } />
                    <Route path="/staff" exact component={ StaffPage } />
                    <Route path="/staff/:id" exact component={ StaffDetail } />
                  </Switch>
                <Footer disableWhiteBuffer={ true } />
              </div>
            </div>
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
