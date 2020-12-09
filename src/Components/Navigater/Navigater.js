import React from "react";

import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Navigater extends React.Component {

  render() {
    return(
      <div style={{ backgroundColor: '#0C54A3' }}>
        <div style={ style.technicalContainer }>
          <Link to="/home" style={ style.navButtonStyle }>HOME</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/about" style={ style.navButtonStyle }>ABOUT</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/academics" style={ style.navButtonStyle }>ACADEMICS</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/apply" style={ style.navButtonStyle }>APPLY</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/campus" style={ style.navButtonStyle }>CAMPUS</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/staff" style={ style.navButtonStyle }>FACULTY & STAFF</Link>
        </div>
      </div>
    );
  }
}

const style = {
  technicalContainer: {
    color: "white",
    display: 'flex',
    overflow: "hidden",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0C54A3',
    marginLeft: '17%',
    paddingTop: '1.1%',
    paddingBottom: '1.1%',
    flexWrap: 'wrap'
  },
  navButtonStyle: {
    backgroundColor:'rgb(0,0,0,0)',
    border: "0px solid #000000",
    textDecoration: 'none',
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: 'white',
  },
  navDividerStyle: {
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: 'white',
    marginRight: 25,
    marginLeft: 25
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( Navigater );
