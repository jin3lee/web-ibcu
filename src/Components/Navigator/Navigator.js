import React from "react";

import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Navigator extends React.Component {

  render() {
    return(
      <div style={{ backgroundColor: '#0C54A3' }}>
        <div style={ style.technicalContainer }>
          <Link to="/home" style={ style.navButtonStyle }>{ this.props.translation.Navigator.home }</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/about" style={ style.navButtonStyle }>{ this.props.translation.Navigator.about }</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/academics" style={ style.navButtonStyle }>{ this.props.translation.Navigator.academics }</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/apply" style={ style.navButtonStyle }>{ this.props.translation.Navigator.apply }</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/campus" style={ style.navButtonStyle }>{ this.props.translation.Navigator.campus }</Link>
          <div style={{ marginLeft: "2%", marginRight: "2%"}}> / </div>
          <Link to="/staff" style={ style.navButtonStyle }>{ this.props.translation.Navigator.staff }</Link>
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
    paddingTop: '1.1%',
    paddingBottom: '1.1%',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginRight: '2%'
  },
  navButtonStyle: {
    backgroundColor:'rgb(0,0,0,0)',
    border: "0px solid #000000",
    textDecoration: 'none',
    fontFamily: "Roboto",
    fontSize: '1.3em',
    color: 'white',
    fontWeight: '700',
  },
  navDividerStyle: {
    fontFamily: "Arial",
    fontSize: '1.5em',
    color: 'white',
    marginRight: 25,
    marginLeft: 25
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
    translation: state.translationToggle.translation
  };
};

export default connect( mapStateToProps )( Navigator );
