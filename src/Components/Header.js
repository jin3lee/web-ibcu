import React from "react";

import { connect } from 'react-redux';
import { ReactComponent as WimuLogo } from './../assets/svg/wimuLogo.svg';
import TranslationToggle from './TranslationToggle/TranslationToggle.js';
import { ReactComponent as SouthKoreaIcon } from './../assets/svg/south-korea.svg';
import { ReactComponent as UnitedStatesIcon } from './../assets/svg/united-states.svg';
import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return(
      <header className="header-background">
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          }}>
          
          <div style={ style.header_style }>
            
            <div style={{ 
              display: 'flex',  
              justifyContent: 'center',
              flexDirection: 'column',
              margin: 5,
              marginLeft: '5%',
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

          
          <TranslationToggle />
        </div>

      </header>
    );
  }
}

const style = {
  header_style: {
    overflow: "hidden",
    display: 'flex',
    width: '60%',
  },
  logoStyle:{
    width: 35,
    height: 35,
  },
  iconLanguageStyle:{
    width: 21,
    height: 21,
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
