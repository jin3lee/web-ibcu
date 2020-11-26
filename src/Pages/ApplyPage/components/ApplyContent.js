import React from "react";

import MessageFromThePresident from './../../../Components/Other/MessageFromThePresident.js';

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

        <div style={{ marginLeft: '5%', marginRight: '5%', width: 550, marginTop: 30 }}>
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
          <div style={{ marginTop: '1%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3 Things To Know Before Applying</div>
          <br />
          <b>1. Environment</b>
          <div style={{ display: 'flex', marginTop: '1%', fontFamily: 'Avenir' }}>
            You will find that International Bible College and University is a great environment to
            seek God, discover your own gifts, form your core values, and identify &amp; activate the
            desires He built in you.
          </div>
          <br />
          <b>2. Emphasis on Internship</b>
          <div style={{ display: 'flex', marginTop: '1%', fontFamily: 'Avenir' }}>
            With all of the programs we offer, there is a strong emphasis on internship. This is your
            opportunity for hands-on experience – you learn best by doing. We help give you that
            opportunity in a wide variety of ministries, both urban and multi-cultural. You will also get
            a chance to be involved in a broad spectrum of activities within those ministries.
          </div>
          <br />
          <b>3. Please, ask God if this is for you!</b>
          <div style={{ display: 'flex', marginTop: '1%', fontFamily: 'Avenir' }}>
          Do you have a hunger for abiding presence of God? Is the cry of your heart to see God’s
          Kingdom come, on earth as it is in Heaven? I would encourage you to pray, asking Jesus
          if International Bible College and University is the next step for you! We will be happy to
          welcome you to the family!
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>If you are ready to apply, click the link below to download the application form:</div>
          </div>
          <br />
          <div style={{ fontFamily: 'Avenir', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href='https://ibcu-assets.s3-us-west-1.amazonaws.com/Application_Form_2019.docx' download>Click Here to Download Application Form</a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
        </div>

        <MessageFromThePresident />

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
    flexWrap: 'wrap'
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
