import React from "react";

class Footer extends React.Component {

  render() {
    return(
      <div style={ style.technicalContainer }>

        <a href="korbotic.com" style={{fontFamily: "Avenir", fontSize: '3.5em', color: "white", textDecoration: 'none'}}>
          korbotic
        </a>

        <div style={{ fontSize: 10, marginTop: 25 }}>
          korbotic © 2019
        </div>

      </div>
    );
  }
}

const style = {
  technicalContainer: {
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 250,
  },
}

export default Footer;
