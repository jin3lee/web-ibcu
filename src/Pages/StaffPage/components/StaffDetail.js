import React, { useState } from "react";

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

class StaffDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      id: null
    };
  }


  render() {
    // console.log('testing: ', id);
    return(
      <div style={ style.container }>
        test 
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
