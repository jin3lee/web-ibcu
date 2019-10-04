import React from "react";

import { connect } from 'react-redux';
import { updateSiteWidth, updateSiteHeight } from './actions.js'

// PaigeDimensions is a listener
// PaigeDimensions is NOT a visual component, but rather listens for window resizing.
// It will dispatch the new dimensions of the window so that all the other
// components will be able to optional rescale with the new "width" & "height"
class PageDimensions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.props.updateSiteDimensionsAction( window.innerWidth, window.innerHeight );
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
      null
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pageDimensions: state.pageDimensions,
  };
};


const mapDispatchToProps = dispatch => {
  return ({
  	updateSiteDimensionsAction: ( width, height ) => {
  		dispatch(updateSiteWidth( width ));
      dispatch(updateSiteHeight( height ));
  	},
  })
}

export default connect( mapStateToProps, mapDispatchToProps )( PageDimensions );
