import React from "react";

import { connect } from 'react-redux';
import { ReactComponent as WimuLogo } from './../assets/svg/wimuLogo.svg';
import TranslationToggle from './TranslationToggle/TranslationToggle.js';
import { ReactComponent as HamburgerMenu } from './../assets/svg/hamburgerMenu.svg';
import { Link } from "react-router-dom";

import { displaySidebar } from './../../src/Container/actions.js'

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      screenWidth: null
    };
  }

  render() {

    let screenWidth = this.state.screenWidth;
    if( this.props.pageDimensions 
      && screenWidth !== this.props.pageDimensions.width ) 
    {
      screenWidth = this.props.pageDimensions.width;
    }

    if( screenWidth < 515 ) {
      return(
        <header className="header-background">
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
          }}>
            
            <div style={{ 
              display: 'flex',
              marginLeft: '5%',
              marginRight: '5%',
              paddingTop: '3%',
              paddingBottom: '1%',
            }}>
              
              <div style={{ 
                display: 'flex',  
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
                <div>
                  <Link to="/">
                    <WimuLogo style={ style.logoStyle } />
                  </Link>
                </div>
              </div>

              <div style={{ width: '5%' }}/>

              <Link to="/" style={ style.collegeNameStyle }>
                { this.props.translation.Header.schoolName }
              </Link>

              <button 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  width: '20%', 
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  backgroundColor: 'rgba(0,0,0,0)'
                }}
                onClick={ () => { 
                  this.props.dispatch( displaySidebar(true) );
                } }
              >         
                <HamburgerMenu />
              </button>
            </div>
          </div>
        </header>
      );


    /* CASE: Screen is greater than 515 */
    } else {
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
                  { this.props.translation.Header.schoolName }
                </Link>
              </div>
            </div>

            <TranslationToggle /> 
          </div>

        </header>
      );
    }
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
    translation: state.translationToggle.translation,
    pageDimensions: state.pageDimensions,
    displaySidebar: state.rootContainer.displaySidebar,
  };
};

export default connect( mapStateToProps )( Header );
