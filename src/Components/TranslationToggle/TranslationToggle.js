import React from "react";

import { connect } from 'react-redux';

import { ReactComponent as SouthKoreaIcon } from './../../assets/svg/south-korea.svg';
import { ReactComponent as UnitedStatesIcon } from './../../assets/svg/united-states.svg';
import { LANGUAGE_ENGLISH, LANGUAGE_KOREAN } from './actionTypes.js';
import { updateLanguage } from './actions.js';

class TranslationToggle extends React.Component {

  render() {
    
    if( this.props.language === LANGUAGE_ENGLISH ){
      return(

        <div style={{ 
              verticalAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginRight: '2%',
          }}>
          <div style={{ 
              display: 'flex',
              flexDirection: 'row', 
              justifyContent: 'center', 
          }}>
              <button 
                  onClick={ () => { this.props.dispatch( updateLanguage( LANGUAGE_ENGLISH ) ) } }
                  style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'rgba(12,84,163,.15)',
                    border: 'none',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 50,
                    verticalAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
              >
                
                <div 
                  style={{ 
                    outline: 'none',
                    boxShadow: 'none',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center'
                  }}>
                    <UnitedStatesIcon style={ style.iconLanguageStyle } />
                </div>
                
                <div style={{ width: 10 }}/>
                
                <div style={{ 
                  fontWeight: 600,
                  fontFamily: 'Calibri',
                }}>
                  ENGLISH
                </div>

              </button>


              <div style={{ width: 5 }}/>

              <button 
              onClick={ () => { this.props.dispatch( updateLanguage( LANGUAGE_KOREAN ) ) } }
              style={{ 
                outline: 'none',
                boxShadow: 'none',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', border: 'none', backgroundColor: 'rgba(0,0,0,0)' }}>
                  <SouthKoreaIcon style={ style.iconLanguageStyle } />
              </button>
          </div>
        </div>
      );
    } else {
      return(

        <div style={{ 
              verticalAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginRight: '2%',
          }}>
          <div style={{ 
              display: 'flex',
              flexDirection: 'row', 
              justifyContent: 'center', 
          }}>

            <button 
            onClick={ () => { this.props.dispatch( updateLanguage( LANGUAGE_ENGLISH ) ) } }
            style={{ 
              outline: 'none',
              boxShadow: 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', border: 'none', backgroundColor: 'rgba(0,0,0,0)' }}>
                <UnitedStatesIcon style={ style.iconLanguageStyle } />
            </button>

            <div style={{ width: 5 }}/>

            <button 
              onClick={ () => { this.props.dispatch( updateLanguage( LANGUAGE_KOREAN ) ) } }
              style={{
                outline: 'none',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgba(12,84,163,.15)',
                border: 'none',
                borderColor: 'red',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 50,
                verticalAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            
              <div style={{ 
                fontWeight: 600,
                fontFamily: 'Calibri',
              }}>
                KOREAN
              </div>
              
              <div style={{ width: 10 }}/>
              
              <div style={{ 
                outline: 'none',
                boxShadow: 'none',
                display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <SouthKoreaIcon style={ style.iconLanguageStyle } />
              </div>

            </button>


          </div>
        </div>
      );
    }
  }
}

const style = {
  iconLanguageStyle:{
    width: 20,
    height: 20,
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
    language: state.translationToggle.language
  };
};

export default connect( mapStateToProps )( TranslationToggle );
