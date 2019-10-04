import React from "react";

import { connect } from 'react-redux';
// import { updatePage } from './../Container/actions.js';
// import { PAGE_ID_SIGN_UP, PAGE_ID_LOGIN_IN } from './../Container/actionTypes.js';
import logo from '../assets/ibcuni_logo.png';

class Header extends React.Component {

  render() {
    return(
      <header className="header-background">
        <div style={ style.header_style }>
          <div style={{ marginLeft: '10%', alignItems: 'center', display: 'flex' }}>
            <a href='ibcuni.com'>
              <img src={ logo } style={ style.logoStyle } alt="logo"/>
            </a>
            <a href="ibcuni.com" style={ style.collegeNameStyle }>
              International Bible College & University
            </a>
          </div>
        </div>
      </header>
    );
  }
}

const style = {
  header_style: {
    overflow: "hidden",
    height: 90,
    display: 'flex',
    backgroundColor: 'white',
  },
  logoStyle:{
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  collegeNameStyle:{
    marginLeft: 20,
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: "#0C54A3",
    textDecoration: 'none',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( Header );
