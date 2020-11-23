import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';


const CONTENT_ID_PASSION = "CONTENT_ID_PASSION";

class AboutProcess extends React.Component {

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

  render() {
    return(
      <div style={ style.container }>
        <div style={{
          marginLeft: '5%', marginRight: '5%',
          display: 'flex', flexDirection: 'column',
        }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Our Process</h2>
          <div style={{
            fontFamily: 'Avenir',
            fontSize: '1.4em',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4%',
            textAlign: 'center',
          }}>
          We are a school of the supernatural. We value an atmosphere of faith – a
          spiritual greenhouse where the life and the fruit of God’s Spirit is evident. You will
          capture this value through practical “worshiping” ministry experience; through
          seasoned teachers who impart their gifts, wisdom and passions; and through
          discipleship under qualified mentors.
          You will be expanded in three primary areas:
          <br />
          <br />
          1. Ministry Skills
          <br />
          2. Life-Skills
          <br />
          3. Word of Knowledge from God Skills
          <br />
          <br />
          You will gain lasting relationships with fellow students, mentors, teachers and
          pastors, helping you build a network from which you can launch a fruitful ministry.
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
    backgroundColor: '#E4EBF3',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: '#1F60A9',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( AboutProcess );
