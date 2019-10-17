import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';


const CONTENT_ID_PASSION = "CONTENT_ID_PASSION";

class AboutCoreValue extends React.Component {

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
      <div>Our Passion</div>
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
        <div style={{
          marginLeft: '5%', marginRight: '5%',
          display: 'flex', flexDirection: 'column',
          alignItem: 'center',
          color: '#0C54A3'
        }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Our Core Values</h2>
          <div style={{
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            fontSize: '1.4em',
            display: 'flex',
            marginTop: '2%',
            textAlign: 'center',
            flexDirection: 'column'
          }}>
          These are the four common threads you will discover running throughout our
          programs:
          <br />
          <br />
            <div style={{ textAlign: 'left', justifyContent: 'center', display: 'flex' }}>
              1. Worshiping God
              <br />
              2. Equipping with the Word of God
              <br />
              3. Knowing and Using Your Gifts
              <br />
              4. Discipling Others
            </div>
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
    backgroundColor: '#84ACD2',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( AboutCoreValue );
