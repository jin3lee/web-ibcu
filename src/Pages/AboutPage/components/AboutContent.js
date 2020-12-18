import React from "react";

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
      <div style={{ marginTop: '5%', fontFamily: 'Avenir', fontWeight: 'bold', justifyContent: 'center', display: 'flex', fontSize: '1.5em' }}>Our Passion</div>
      <div style={{ display: 'flex', marginTop: '4%', fontFamily: 'Avenir', textAlign: 'center', fontSize: '1.4em' }}>
        Our primary passion at Washington International Mission University is to build you up in
        your faith and to equip you for ministry to others. We desire to present every man
        complete in Christ (Colossians 1:28). We are training activators who are launching
        globally, each one transforming others with revelation and wisdom. Computers,
        communication technology, and methods are dynamic. Therefore, we will train you to
        become His Light in this changing world with the unchanging Word of God, imparting
        Jesus’ gifts, as we build churches in a global community together.
        <br />
        <br />
        You will find that Washington International Mission University is a great environment to seek God, discover your own gifts, form your core values, and identify & activate the desires He built in you.
      </div>
    </div>
  }

  render() {
    return(
      <div style={ style.container }>

        <div style={{ marginLeft: '5%', marginRight: '5%' }}>

          { (this.state.currentContentById === CONTENT_ID_PASSION) && this._getPassionContent() }

        </div>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: '5%',
    paddingBottom: '10%',
    color: 'black',
    backgroundColor: 'white',
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
