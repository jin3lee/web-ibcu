import React from "react";

import campusImage from '../../../../assets/campusImage.png';
import presidentImage from '../../../../assets/staff/staff_r_kong.png';

import { connect } from 'react-redux';
import { updatePage } from '../../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_ACADEMICS } from '../../../../Container/actionTypes.js'

class AcademicsContent extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      currentContentId: 0,
    };
    this._updatePageTo = this._updatePageTo.bind(this);
    this._updateContentTo = this._updateContentTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  _updateContentTo( contentId ) {
    this.setState({ currentContentId: contentId });
  }

  _getAcademicMenu() {
    return <div style={{  marginTop: '4%' }}>
      <button onClick={ () => { this._updateContentTo(0) } } style={ style.hyperlinkStyle }>Attendance Policy</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(1) } } style={ style.hyperlinkStyle }>Academic Policy</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(2) } } style={ style.hyperlinkStyle }>Class Schedule</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(3) } } style={ style.hyperlinkStyle }>Earning Credit</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(4) } } style={ style.hyperlinkStyle }>General Information</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(5) } } style={ style.hyperlinkStyle }>Admission and Application</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(6) } } style={ style.hyperlinkStyle }>Program Descriptions</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(7) } } style={ style.hyperlinkStyle }>Outline of Programs</button>
      <br /><br />
      <button onClick={ () => { this._updateContentTo(8) } } style={ style.hyperlinkStyle }>Course Descriptions</button>
    </div>;
  }

  _getAttendancePolicyContent() {
    return(<div>
      <h1>Attendance Policies</h1>
      <h2>Attendance</h2>
      Attendance is taken for all classes, chapels and intensives.
      <h2>Certificate Program Attendance Policy:</h2>
      3 Absences – Student receives warning from administration
      <br />
      4+ Absences – Student must complete supplemental homework from instructor
      <br />
      5+ Absences – Student eligible for termination from IBC&amp;U
      <h3>Bachelor, Master, Doctorate Program Attendance Policy (per course):</h3>
      2 absences – Student receives warning from administration
      <br />
      3+ absences – Student eligible for termination from IBC&amp;U
      <br />
      </div>
    );
  }

  _getCurentBackFlowButtonText() {
    switch( this.state.currentContentId ) {
      case -1:
        break;
      case 0:
        return "Attendance Policy";
      case 1:
        return "Academic Policy";
      case 2:
        return "Class Schedule";
      case 3:
        return "Earning Credit";
      case 4:
        return "General Information";
      case 5:
        return "Admission and Application";
      case 6:
        return "Program Descriptions";
      case 7:
        return "Outline of Programs";
      case 8:
        return "Course Descriptions";
    }
  }

  render() {
    console.log("currentContentId: ", this.state.currentContentId);
    return(
      <div style={ style.container }>
        <div style={{ flex: 3,  marginLeft: '10%', marginRight: '3%', marginTop: 30 }}>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'rgb(90, 90, 90)' }}>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_HOME ) } } style={ style.backFlowButtonStyle }>
              Home
            </button>
            <div style={ style.backFlowButtonStyle }>
              >
            </div>
            <button onClick={ () => { this._updateContentTo( -1 ) } } style={ style.backFlowButtonStyle }>
              Academics
            </button>
            {
              (this.state.currentContentId !== -1) && <div style={ style.backFlowButtonStyle }>
                >
              </div>
            }
            <button onClick={ () => { this._updateContentTo( -1 ) } } style={ style.backFlowButtonStyle }>
              { this._getCurentBackFlowButtonText() }
            </button>
          </div>

          { ( this.state.currentContentId == -1 ) && this._getAcademicMenu() }
          { ( this.state.currentContentId == 0 ) && this._getAttendancePolicyContent() }
        </div>

        <div style={{ flex: 2 }}>
          <div style={{ marginRight: '10%', marginTop: 30, fontWeight: 'bold' }}>
            Message from the President
          </div>
          <div style={{ width: '80%' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display:'flex', justifyContent: 'center-left', alignItems: 'center' }}>
                <img src={ presidentImage } style={{ width: 404/2.5, height: 433/2.5 }} />
              </div>
              <div style={{ flex: 1 }}>
                <br />
                  Dear Students who want to pursue truth and excellence:

                  There are so many universities and colleges all around the globe. However, this International Bible College and University has been established to be the beacon of truth for this dark world.
                <br />
              </div>
            </div>
            <br />
            So many religions and their leaders have come and gone like a flood. The extreme selfishness and lost morality overflows the empty bowl of reality. And yet, here is the educational goal for our University: only contending for the truth and finding visionaries who are willing to sacrifice and willing to chase the shadow away and recover the society that has long lost moral value and truthfulness.
            <br />
            <br />
            You, the beloved prospective student:
            <br />
            <br />
            International Bible College and University (IBC&U) has great plans with a solid educational ideology to suit your needs for a firm faith so that we may be the stepping stone to your promising time and eternity.
            <br />
            <br />
            We have a vision based on the Word of God: “Your beginning will seem humble, so prosperous will your future be.” (Job 8:7)

            If you are willing to set out to invest your valuable time, talent, and treasure at our University, we would partner with you to be the bearers of the Light and Truth of the World.

            May we challenge you with an invitation from God’s promise for better scholarship and more mature faith in the Lord?
            <br />
            <br />
            Dr. Richard H. Kong
            <br />
            President
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  backFlowButtonStyle: {
    marginRight: 10,
    display: 'flex',
    border: "0px solid #000000",
    backgroundColor: 'rgb(0, 0, 0, 0)',
    fontWeight: 'bold',
  },
  hyperlinkStyle: {
    backgroundColor: 'rgb(0, 0, 0, 0)',
    border: "0px solid #000000",
    fontFamily: 'Avenir',
    color: '#0C54A3',
    fontSize: 22,
    textDecorationLine: 'underline',
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( AcademicsContent );
