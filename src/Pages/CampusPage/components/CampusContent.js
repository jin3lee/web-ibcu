import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_CAMPUS } from '../../../Container/actionTypes.js'

class CampusContent extends React.Component {

  constructor( props ) {
    super( props );
    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  render() {
    return(
      <div style={ style.container }>

        <div style={{ flex: 3,  marginLeft: '10%', marginRight: '3%', marginTop: 30 }}>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'rgb(90, 90, 90)' }}>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_HOME ) } } style={ style.backFlowButtonStyle }>
              Home
            </button>
            <div style={ style.backFlowButtonStyle }>
              >
            </div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_CAMPUS ) } } style={ style.backFlowButtonStyle }>
              Campus
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: '', marginTop: '4%', fontFamily: 'Avenir' }}>
          International Bible College and University – Federal Way, Washington
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir' }}>
            Our campus is located at <b>32008 32nd Ave S, Federal Way, WA 98001 U.S.A.</b>
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir' }}>
            The building is located in one of the nation’s most culturally diverse areas. Just 20 minutes from campus, and accessible by freeway, are Sea-Tac Airport, Seattle Downtown, professional sports arenas, and innumerable other recreational opportunities.
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir' }}>
            Geographically, Seattle is the nearest major U.S. city from Asia. Due to its location, foreign students have the opportunity to visit numerous worldwide, well-known businesses, such as Microsoft, Boeing, Starbucks, Costco, and Amazon.
          </div>
        </div>

        <div style={{ flex: 2, marginRight: '10%', marginTop: 30 }}>
          <iframe title="IBCU Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6697121.489565031!2d-125.5861898306647!3d47.181521985669114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905829e2a85e45%3A0xc1e6e622ab680455!2s32008%2032nd%20Ave%20S%2C%20Federal%20Way%2C%20WA%2098001!5e0!3m2!1sen!2sus!4v1570425289678!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border:"0;" }} allowfullscreen=""></iframe>
        </div>

      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  backFlowButtonStyle: {
    marginRight: 10,
    display: 'flex',
    border: "0px solid #000000",
    backgroundColor: 'rgb(0, 0, 0, 0)',
    fontWeight: 'bold',
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( CampusContent );
