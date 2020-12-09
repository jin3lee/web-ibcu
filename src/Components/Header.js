import React from "react";

import { connect } from 'react-redux';
import { updatePage } from './../Container/actions.js';
import { PAGE_ID_HOME } from './../Container/actionTypes.js';
import logo from '../assets/ibcuni_logo.png';
import {ReactComponent as WimuLogo} from './../assets/svg/wimuLogo.svg';

class Header extends React.Component {

  constructor( props ) {
    super( props );

    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo ( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  render() {
    return(
      <header className="header-background">
        <div style={ style.header_style }>
          <div style={{ marginLeft: '10%', alignItems: 'center', display: 'flex' }}>
            <WimuLogo style={{ height: '75%', width: '10%' }} />
            <div style={{ padding: '1%' }} />
            <a href="wimuniversity.com" style={ style.collegeNameStyle }>
              Washington International Mission University
            </a>
          </div>
        </div>
      </header>
    );
  }
}

const style = {
  header_style: {
    overflow: "hidden",
    display: 'flex',
    backgroundColor: 'white',
  },
  logoStyle:{
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  collegeNameStyle:{
    marginLeft: 0,
    fontFamily: "Avenir",
    fontSize: '1.5em',
    color: "#0C54A3",
    textDecoration: 'none',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( Header );
