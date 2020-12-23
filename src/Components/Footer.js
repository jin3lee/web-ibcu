import React from "react";
import { connect } from 'react-redux';

class Footer extends React.Component {

  render() {
    return(
      <div>
        {( !this.props.disableWhiteBuffer ) && <div style={{ backgroundColor: 'white', paddingTop: 40 }}></div>}
        <div style={ style.technicalContainer }>
            <a href="ibcuni.com" style={{ fontFamily: "Avenir", fontSize: '1em', textDecoration: 'none', color: 'white', marginLeft: 10, marginRight: 10, textAlign: 'center', justifyContent: 'center' }}>
              { this.props.translation.Footer.schoolName }
            </a>

            <div style={{ fontSize: 15, marginTop: 20, fontFamily: "Marker-Felt", fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlign: 'center', justifyContent: 'center' }}>
              { this.props.translation.Footer.motto }
            </div>

            <div style={{ marginTop: 20, fontSize: "1em", fontFamily: "Avenir", fontWeight: 'bold' }}>
              <hr
                style={{
                  color: "white",
                  backgroundColor: "white",
                  height: 1,
                  width: 50
                }}
              />
            </div>

            <div style={{ fontSize: ".8em", marginTop: 20, marginLeft: 10, marginRight: 10, textAlign: 'center', justifyContent: 'center' }}>
              { this.props.translation.Footer.copyright }
            </div>
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
    backgroundColor: "#0C54A3",
    color: 'white',
    paddingTop: 40,
    paddingBottom: 40,
    height: "100%",
  },
}
const mapStateToProps = (state, ownProps) => {
  return {
    translation: state.translationToggle.translation
  };
};

export default connect( mapStateToProps )( Footer );
