import React from "react";

import presidentImage from '../../../assets/staff/staff_r_kong.png';

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

        <div style={{ marginLeft: '5%', width: 550, marginTop: 30 }}>
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
        </div>

        <div style={{ marginLeft: '5%', width: 550, }}>
          <div style={{ marginRight: '10%', marginTop: 30, fontWeight: 'bold' }}>
            Message from the President
          </div>
          <div style={{ width: '80%' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display:'flex', justifyContent: 'center-left', alignItems: 'center' }}>
                <img alt="presidentFace" src={ presidentImage } style={{ width: 404/2.5, height: 433/2.5 }} />
              </div>
              <div style={{ flex: 1 }}>
                <br />
                  Dear Students who want to pursue truth and excellence:

                  There are so many universities and colleges all around the globe. However, this International Bible College and University has been established to be the beacon of truth for this dark world.
                <br />
              </div>
            </div>
            <br />
            So many religions and their leaders have come and gone like a flood. The extreme selfishness and lost morality overflows the empty bowl of reality. And yet, here is the educational goal for our University: only contending for the truth and finding visionaries who are willing to sacrifice and willing to chase the shadow away and recover the society that has long lost moral value and truthfulness.
            <br />
            <br />
            You, the beloved prospective student:
            <br />
            <br />
            International Bible College and University (IBC&U) has great plans with a solid educational ideology to suit your needs for a firm faith so that we may be the stepping stone to your promising time and eternity.
            <br />
            <br />
            We have a vision based on the Word of God: “Your beginning will seem humble, so prosperous will your future be.” (Job 8:7)

            If you are willing to set out to invest your valuable time, talent, and treasure at our University, we would partner with you to be the bearers of the Light and Truth of the World.

            May we challenge you with an invitation from God’s promise for better scholarship and more mature faith in the Lord?
            <br />
            <br />
            Dr. Richard H. Kong
            <br />
            President
          </div>
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
