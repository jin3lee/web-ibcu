import React from "react";

class Footer extends React.Component {

  render() {
    return(
      <div style={ style.technicalContainer }>
          <a href="ibcuni.com" style={{ fontFamily: "Avenir", fontSize: '1.5em', textDecoration: 'none', color: '#0C54A3' }}>
            International Bible College & University
          </a>

          <div style={{ fontSize: 15, marginTop: 25, fontFamily: "Marker-Felt", fontWeight: 'bold' }}>
            PURSUE TRUTH & EXCELLENCE
          </div>


          <div style={{ fontSize: 15, marginTop: 25, fontSize: "1em", fontFamily: "Avenir", fontWeight: 'bold' }}>
            <hr
              style={{
                color: "#0C54A3",
                backgroundColor: "#0C54A3",
                height: 1,
                width: 50
              }}
            />
          </div>

          <div style={{ fontSize: ".8em", marginTop: 25 }}>
            © International Bible College & University | Federal, WA
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
    color: "#0C54A3",
    backgroundColor: 'white',
  },
}

export default Footer;
