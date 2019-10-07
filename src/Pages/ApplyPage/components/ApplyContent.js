import React from "react";

import campusImage from '../../../assets/campusImage.png';

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_APPLY } from '../../../Container/actionTypes.js'

class ApplyContent extends React.Component {

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
            <button onClick={ () => { this._updatePageTo( PAGE_ID_APPLY ) } } style={ style.backFlowButtonStyle }>
              Apply
            </button>
          </div>

          <div style={{ display: 'flex', marginTop: '4%', fontFamily: 'Avenir' }}>
            You’re undaunted by challenges. In fact, you seek them out. You believe that a world of good starts with one person. One step. We believe that too. So what are you waiting for? Start the journey to become a Husky today.
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>Step 1. Download Application and fill the application form</div>
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href='https://ibcu-assets.s3-us-west-1.amazonaws.com/Application_Form_2019.docx' download>Click to download</a>
          </div>
        </div>

        <div style={{ flex: 2, marginRight: '10%', marginTop: 30 }}>
          Programs
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

export default connect( mapStateToProps )( ApplyContent );
