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

// actions
import { displaySidebar } from './actions.js';
import { updateLanguage } from './../Components/TranslationToggle/actions.js';
import { LANGUAGE_ENGLISH, LANGUAGE_KOREAN } from './../Components/TranslationToggle/actionTypes.js';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

// Listeners
import PageDimensions from './../Components/PageDimensions/PageDimensions.js';

// Side bar
import { 
  ProSidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  SidebarHeader, 
  SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// SVG
import { ReactComponent as ChevronDown } from './../assets/svg/chevronDown.svg';

class RootContainer extends React.Component {

  render() {

    // display sidebar
    if( this.props.displaySidebar ) {
      return(
        <div className="root-container-background" style={ style.rootContainerStyle }>
  
            <Router>
              <PageDimensions />
              
              <div style={{ display: 'flex', flexDirection: 'row' }}>
  
                <div>
                  <ProSidebar>
                    <SidebarHeader style={{ 
                      height: 40, 
                      width: '100%', 
                      dispaly: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-around'
                    }}>
                      <button style={{ margin: 10, height: 20, backgroundColor: 'rgba(0,0,0,0)', border: 'none' }} onClick={ () => { this.props.dispatch( displaySidebar(false) ) } }>
                          <ChevronDown />
                      </button>
                    </SidebarHeader>
  
                    <Menu iconShape="square">
                        <MenuItem><Link to="/home">HOME</Link></MenuItem>
                        <MenuItem><Link to="/about">ABOUT</Link></MenuItem>
                        <MenuItem><Link to="/academics">ACADEMICS</Link></MenuItem>
                        <MenuItem><Link to="/apply">APPLY</Link></MenuItem>
                        <MenuItem><Link to="/campus">CAMPUS</Link></MenuItem>
                        <MenuItem><Link to="/staff">FACULTY & STAFF</Link></MenuItem>
                    </Menu>
  
                    <SidebarFooter />
  
                    <Menu iconShape="square">
                      <SubMenu title="Language">
                          <MenuItem onClick={ ()=> { this.props.dispatch( updateLanguage( LANGUAGE_ENGLISH ) ); } }>English</MenuItem>
                          <MenuItem onClick={ ()=> { this.props.dispatch( updateLanguage( LANGUAGE_KOREAN ) ); } }>Korean</MenuItem>
                      </SubMenu>
                    </Menu>
  
                    <SidebarFooter />
  
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







    // dispaly NO-sidebar -> Just content
    } else { 
      return(
        <Router>
          <PageDimensions />
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
        </Router>
      );
    }
  }
}

const style = {
  rootContainerStyle:{
    backgroundColor: "white",
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    displaySidebar: state.rootContainer.displaySidebar,
    pageDimensions: state.pageDimensions,
  };
};

export default connect( mapStateToProps )( RootContainer );
