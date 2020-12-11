import React from "react";
import { Redirect } from 'react-router';
import ExperienceGallery from './components/ExperienceGallery.js';

class HomePage extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      navigateToApply: false,
    };
  }

  render() {
    return(
      <div className="root-container-background" style={ style.homePageStyle }>
          <div style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 60), rgb(0, 0, 0))' }}>
            
            <ExperienceGallery />
            
            <div style={{ backgroundColor: 'rgb(228, 235, 243)', padding: '7%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: '550', fontSize: 25 }}>Here, ministry begins the day you walk onto campus.</div>
              <div style={{ padding: '2%' }}/>
              <button 
                onClick={ ()=>{ this.setState({ navigateToApply: true }) } } 
                style={{ 
                  backgroundColor: '#0C54A3', 
                  color: 'white', 
                  width: '20%', 
                  textAlign: 'center', 
                  padding: 15, 
                  borderRadius: 5, 
                  borderColor: 'white',
                  textDecoration: 'none', 
                  fontSize: 15, 
                  fontFamily: 'Roboto', 
                  fontWeight: '400' 
                }}>
                  JOIN WIMU
                </button>
              { ( !this.state.navigateToApply ) ? null : <Redirect to="/apply" push={ true } /> }
            </div>

          </div>
      </div>
    );
  }
}

const style = {
  homePageStyle:{
    backgroundColor: "white",
  },
}
export default HomePage;
