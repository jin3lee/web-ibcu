import React from "react";

class Navigater extends React.Component {

  render() {
    return(
      <div style={{ backgroundColor: '#0C54A3' }}>
        <div style={ style.technicalContainer }>
            <a href="ibcuni.com" style={{ fontFamily: "Avenir", fontSize: '1.5em', textDecoration: 'none', color: 'white' }}>
              About
            </a>
            <div style={{ fontSize: '1.5em', marginRight: 25, marginLeft: 25 }}>/</div>
            <a href="ibcuni.com" style={{ fontFamily: "Avenir", fontSize: '1.5em', textDecoration: 'none', color: 'white' }}>
              Academics
            </a>
            <div style={{ fontSize: '1.5em', marginRight: 25, marginLeft: 25 }}>/</div>
            <a href="ibcuni.com" style={{ fontFamily: "Avenir", fontSize: '1.5em', textDecoration: 'none', color: 'white' }}>
              Apply
            </a>
        </div>
      </div>
    );
  }
}

const style = {
  technicalContainer: {
    height: 90,
    color: "white",
    display: 'flex',
    overflow: "hidden",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0C54A3',
    marginLeft: '17%',
  },
}

export default Navigater;