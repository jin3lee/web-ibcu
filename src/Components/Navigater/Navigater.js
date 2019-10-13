import React from "react";

import { connect } from 'react-redux';
import {
  PAGE_ID_CAMPUS,
  PAGE_ID_APPLY,
  PAGE_ID_ABOUT,
  PAGE_ID_ACADEMICS,
  PAGE_ID_STAFF
} from './../../Container/actionTypes.js'
import { updatePage } from './../../Container/actions.js'

class Navigater extends React.Component {

  constructor( props ) {
    super( props );
    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  render() {
    return(
      <div style={{ backgroundColor: '#0C54A3' }}>
        <div style={ style.technicalContainer }>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_ABOUT ) } } style={ style.navButtonStyle }>
              ABOUT
            </button>
            <div style={ style.navDividerStyle }>/</div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_ACADEMICS ) } } style={ style.navButtonStyle }>
              ACADEMICS
            </button>
            <div style={ style.navDividerStyle }>/</div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_APPLY ) } } style={ style.navButtonStyle }>
              APPLY
            </button>
            <div style={ style.navDividerStyle }>/</div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_CAMPUS ) } } style={ style.navButtonStyle }>
              CAMPUS
            </button>
            <div style={ style.navDividerStyle }>/</div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_STAFF ) } } style={ style.navButtonStyle }>
              FACULTY & STAFF
            </button>
        </div>
      </div>
    );
  }
}

const style = {
  technicalContainer: {
    color: "white",
    display: 'flex',
    overflow: "hidden",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0C54A3',
    marginLeft: '17%',
    paddingTop: '1.1%',
    paddingBottom: '1.1%',
    flexWrap: 'wrap'
  },
  navButtonStyle: {
    backgroundColor:'rgb(0,0,0,0)',
    border: "0px solid #000000",
    textDecoration: 'none',
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: 'white',
  },
  navDividerStyle: {
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: 'white',
    marginRight: 25,
    marginLeft: 25
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( Navigater );
