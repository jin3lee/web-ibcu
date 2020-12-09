import React from "react";

import { connect } from 'react-redux';

class StaffDetail extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    console.log(this.props);
    return(
      <div style={ style.container }>
        test {this.props}
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
    justifyContent: 'left'
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( StaffDetail );
