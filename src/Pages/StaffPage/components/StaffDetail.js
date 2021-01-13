import React from "react";

import { connect } from 'react-redux';

import staffData from './../../../data/staff.json';

class StaffDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      id: null,
      staffData: staffData,
    };
  }

  componentDidMount () {
    this.setState({ 
      id: this.props.match.params.id
     });
  }

  render() {
    return(
      <div style={ style.container }>
        {this.state.id}
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
