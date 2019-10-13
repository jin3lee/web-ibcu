import React from "react";

import presidentImage from '../../../assets/staff/staff_r_kong.png';

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_ABOUT } from '../../../Container/actionTypes.js'


const CONTENT_ID_PASSION = "CONTENT_ID_PASSION";

class AboutContent extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      currentContentById: CONTENT_ID_PASSION,
    }
    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  _getPassionContent = () => {
    return <div>
      <div style={{ marginTop: '4%' }}>Our Passion</div>
      <div style={{ display: 'flex', marginTop: '3%', fontFamily: 'Avenir' }}>
        Our primary passion at International Bible College and University is to build you up in
        your faith and to equip you for ministry to others. We desire to present every man
        complete in Christ (Colossians 1:28). We are training activators who are launching
        globally, each one transforming others with revelation and wisdom. Computers,
        communication technology, and methods are dynamic. Therefore, we will train you to
        become His Light in this changing world with the unchanging Word of God, imparting
        Jesus’ gifts, as we build churches in a global community together.
      </div>
    </div>
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
            <button onClick={ () => { this._updatePageTo( PAGE_ID_ABOUT ) } } style={ style.backFlowButtonStyle }>
              About
            </button>
          </div>

          { (this.state.currentContentById === CONTENT_ID_PASSION) && this._getPassionContent() }
        </div>

        <div style={{ marginLeft: '5%', width: 550, marginTop: 30 }}>
          <div style={{ fontWeight: 'bold' }}>
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

export default connect( mapStateToProps )( AboutContent );
