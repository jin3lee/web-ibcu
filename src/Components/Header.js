import React from "react";

import { connect } from 'react-redux';
import { ReactComponent as WimuLogo } from './../assets/svg/wimuLogo.svg';
import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return(
      <header className="header-background">
        <div style={ style.header_style }>
          <div style={{ 
            display: 'flex',  
            justifyContent: 'center',
            flexDirection: 'column',
            margin: 5,
            marginLeft: '5%',
            marginRight: '1%'
          }}>
            <div>
              <Link to="/">
                <WimuLogo style={ style.logoStyle } />
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Link to="/" style={ style.collegeNameStyle }>
              Washington International Mission University
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const style = {
  header_style: {
    overflow: "hidden",
    display: 'flex',
    backgroundColor: 'white',
  },
  logoStyle:{
    width: 35,
    height: 35,
  },
  collegeNameStyle:{
    fontFamily: "Arial",
    fontSize: '1.3em',
    color: "#0C54A3",
    textDecoration: 'none',
    fontWeight: 700,
    width: '100%',
    paddingBottom: 3
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( Header );
