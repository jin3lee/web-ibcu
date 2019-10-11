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
      currentContentId: 2,
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

  _getAcademicPolicyContent() {
    return(<div>
      <h1>Academic Policies</h1>
      <p>Grades will be monitored by each instructor and the administration. The grading scale is
      determined by the instructor. Students continuously at a C average will receive an
      academic warning from the administration and will be put on academic probation.</p>
      <p>4.0 – 2.4 GPA (A – C+ average) Passing
      <br />
      2.3 – 1.4 GPA (C – D+ average) Warning and academic probation
      <br />
      1.3 or Lower GPA (D or lower) Termination of enrollment</p>
      <h2>Grading Scale</h2>
      A   94 – 100% 4 grade points
      <br />
      A-  90 – 93% 3.7 grade points
      <br />
      B+  87 – 89% 3.5 grade points
      <br />
      B   83 – 86% 3.3 grade points
      <br />
      B-  80 – 82% 3.0 grade points
      <br />
      C+  77 – 79% 2.7 grade points
      <br />
      C   73 – 76% 2.3 grade points
      <br />
      C-  70 – 72% 2.0 grade points
      <br />
      D+  67 – 69% 1.7 grade points
      <br />
      D   60 – 66% 1.3 grade points
      <br />
      F less than 60 0.0 grade points
      <h2>Grade Point Averages</h2>
      A Grade Point Average (GPA) is calculated for each student by multiplying the number of
      credits for each course taken times the grade points for the assigned grade (see above).
      The total grade points are then divided by the number of total credits. Courses having a
      pass fail grade do not have grade points counted towards the student’s GPA.
      </div>);
  }

  _getClassScheduleContent() {
    return(<div>
            <h1>Class Schedules</h1>
            Note: Course schedules listed below are subject to change. Check registration
            information for exact times and dates for each course including seminars and intensives.
            <h2>Classes</h2>
            Most class offerings are 4 credit classes taken once a week per class. The schedule for
            each class varies for each quarter and may be offered in the morning, afternoon, or
            evening. If the student takes online courses, the required number of hours online is the
            same as the in-class participating hours.
            <h2>Seminars</h2>
            Seminars are typically 2 credits for two days of intensive learning. The schedule for the
            seminars is as follows:
            <br />
            Friday: 7:00pm-9:00pm
            <br />
            Saturday: 9:00am-12:00pm
            <br />
            1:00pm-5:00pm
            <br />
            7:00pm-9:00pm

            <h2>Intensives</h2>
            Intensives are 4 credits with book reading and paper writing. The schedule for intensives
            is as follows:
            <br />
            Friday: 6:00pm-9:00pm
            <br />
            Monday/Tuesday/Saturday: 9:00am-5:00pm
            <h2>Course Loads</h2>
            A full time student takes 12 credits per quarter in the Master of Ministry and Master of
            Divinity program. All students in the Certificate of Ministry and Bachelor of Ministry
            programs must take 16 credits to be considered full-time. To be a full time student in
            Doctor of Ministry it takes 16 credits per year. Any less is considered a part-time student.
            <h2>Clock Hour Calculations</h2>
            International Bible College and University has adopted the standard credit hour
            calculation for the quarter system. A quarter unit is equivalent to 50 minutes of classroom
            time per week over a ten week quarter.
            <h2>Academic Advisement</h2>
            At the time of initial enrollment, and during enrollment for every subsequent quarter,
            students will fill out a registration form. This form must be reviewed and signed by the
            school staff before the student can complete registration for that quarter. This is to
            ensure that program requirements are being followed and the needs of the student are
            being met.

            15

            <h2>Internship Courses</h2>
            These courses are pass/fail which is decided by attendance and performance reviews
            made by internship mentors and school staff.
            <h2>Transfer of Credits</h2>
            IBC&amp;U will allow transfer of some college level credits. Students who wish to transfer
            credits will need to have official sealed transcripts sent to the office for review. Credits
            will be considered for transfer from a recognized educational institution of higher learning
            provided the student has received a 2.0 or better grade on courses.
            Credits that relate specifically to our academic classes will be accepted on a case by
            case basis upon review of institution catalogue and courses from the other school.
            Some credits are available for life-experiences. Each is considered on a case by case
            basis.
            Due to the nature of the internship program, internship credits must be earned from an
            approved IBC&amp;U program. In most cases, internship credits will not transfer.</div>);
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
          { ( this.state.currentContentId == 1 ) && this._getAcademicPolicyContent() }
          { ( this.state.currentContentId == 2 ) && this._getClassScheduleContent() }
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
