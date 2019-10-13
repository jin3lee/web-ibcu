import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_STAFF } from '../../../Container/actionTypes.js'

class StaffContent extends React.Component {

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

        <div style={{ width: 400,marginLeft: '10%', marginTop: 30 }}>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'rgb(90, 90, 90)' }}>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_HOME ) } } style={ style.backFlowButtonStyle }>
              Home
            </button>
            <div style={ style.backFlowButtonStyle }>
              >
            </div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_STAFF ) } } style={ style.backFlowButtonStyle }>
              Faculty & Staff
            </button>
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
    flexWrap: 'wrap',
    justifyContent: 'center'
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

export default connect( mapStateToProps )( StaffContent );
