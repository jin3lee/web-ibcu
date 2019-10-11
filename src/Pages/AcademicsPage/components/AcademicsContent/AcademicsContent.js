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
      currentContentId: 7,
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
  _getEarningCreditContent() {
    return(<div>
            <h1>Earning Credit</h1>
            <h2>Academic Classes</h2>
            These are the core of our programs and courses offered at the school. The normal class
            load is to take four 4 credit classes per quarter for bachelor programs. Master program
            students generally take three 4 credit classes per quarter. As described in the class
            schedule section, academic classes are held at various times during the week and,
            occasionally, weekend seminars and multi-day intensives will be offered (see previous
            section in Catalog for schedule).
            <h2>Internship Program</h2>
            The internship program is a core piece of IBC&amp;U. Placement into various departments is
            handled on a case by case basis after meeting and reviewing with school staff. Students
            are placed under an internship mentor who has an established relationship with the
            school. During the quarter, the mentor will turn in a “review slip” relating to the student
            and his/her performance, attendance, and activities. Periodically, during the quarter, the
            student will meet with school staff to review how the student is doing in the area he/she is
            involved in.
            <br /><br />
            A normal load for the internship program is one, 4 credit course for every quarter. Each
            student will be required to serve a minimum of 4 hours per week to receive a passing
            grade for the course. During the senior year of our bachelors program, the internship
            requirements are increased while the academic course load is decreased (see section on
            programs offered).
          </div>);
  }
  _getGeneralInformationContent() {
    return(<div>
            <h1>General Information</h1>
            <h2>Financial Information</h2>
            Application Fee: $50<br />
            Foreign Student Processing Fee: $100<br />
            Certificate of Ministry: $132/credit<br />
            Bachelor of Ministry: $132/credit<br />
            Master of Ministry and Master of Divinity: $165/credit<br />
            Doctor of Ministry $200<br />
            Official Transcript: $15<br />

            <h2>Tuition Payment</h2>
            International Bible College and University accepts cash, personal checks from a U.S.
            bank, money orders, and international wire transfers. Credit and debit cards are accepted
            when payment is given in person. Credit and debit cards are not accepted over the
            phone or online for security reasons. Please request additional information from the
            office for international wire transfers.
            <h2>New Students</h2>
            Tuition payment is required on Orientation Day before the start of the quarter.
            <h2>Returning Students</h2>
            Tuition payment is due on Registration Day for the upcoming quarter.
            <h2>Late Fee</h2>
            A fee of $200 will be added to the cost of tuition if payment is not received on the due
            date. Students are not permitted to attend class until tuition payment is completed.
            <h2>Withdrawal</h2>
            Students withdrawing from the school must complete a withdrawal form. Until this
            withdrawal form has been completed and submitted, students will continue to be
            financially responsible for ongoing tuition.
            Students withdrawing from a class must submit an official withdrawal form prior to four
            weeks before the last day of class. If a course is dropped in the last 4 weeks of the
            quarter, they will receive a failing grade.
            <h2>Scholarships</h2>
            International Bible College and University awards scholarships of 20% to 50% off tuition
            costs to ministers, pastors and missionaries. Scholarships are offered after each
            applicant is reviewed by school staff. If a student is interested in receiving a ministerial
            tuition discount, he/she must contact the school office prior to the time of registration.
            <h2>Tuition Refund Policy</h2>
            Students who withdraw from one, or all, of their courses receive the stated tuition refund
            percentage below. This refund will be based on the date the official withdrawal form is
            returned to and approved by the administration. Only tuition is refundable. Fees are non-
            refundable.
            <br /><br />
            Time of withdrawal Percentage Refunded<br />
            During Open Registration 100%<br />
            First week of quarter 80%<br />
            Second week of quarter 60%<br />
            Third week of quarter 40%<br />
            Fourth week of quarter 20%<br />
            After fourth week 0%
            <h2>Transferring Out</h2>
            Students transferring out from the IBC&amp;U to another school must complete the transfer
            process no later than the first day of the subsequent quarter. Students may not transfer
            out after the first day of the quarter.
          </div>);
  }
  _getAdmissionAndApplicationContent() {
    return(<div>
            <h1>Admission and Application</h1>
            <h2>Application Process</h2>
            A genuine “born again” experience is required for admission to International Bible
            College and University in the bachelor, master and doctor level programs. Prospective
            students must also be in agreement with our beliefs listed above under “What We
            Believe”.
            Applicants must have a diploma from a recognized high school (with a 2.0 average GPA)
            or qualifying GED (General Education Diploma) for bachelor degree, bachelor degree for
            master’s degree and master’s degree for doctor degree.
            <h2>Certificate of Ministry (CM)</h2>
            To begin application process, turn in application form with the application fee and all
            other necessary documentation.
            <h2>Bachelor of Ministry (BM)</h2>
            To begin application process, turn in application form with the application fee and all
            other necessary documentation including:<br />
             Completed and signed Application for Admission<br />
             One completed pastoral reference form<br />
             One professional reference form (personal or other professional)<br />
             Transcripts or official records that show student meets the above admission
            requirements
            <h2>Master of Ministry (MM) &amp; Master of Divinity (MDiv)</h2>
            To begin the application process, turn in the application form with the application fee and
            all other necessary documentation including:<br />
             Completed and signed Application for Admission<br />
             One completed pastoral reference form<br />
             One professional reference form<br />
             One personal reference form<br />
             Transcripts or official records that show student meets the above admission
            requirements<br />
             Completed essay on the essay question listed on application, written or typed
            in English on a separate paper – must include applicant’s full name on top<br />
            <h2>Doctor of Ministry (DMin)</h2>
            To begin application process, turn in the application form with the application fee and all
            other necessary documentation including:<br /><br />
            <b>Admission Requirements</b><br />
             A Master of Divinity or its equivalent, or a Master of Arts of a theological
            nature of at least 72 quarter units (48 semester units) from a religious
            institution<br />
             A ministerial leadership position – the DMin program is designed for ministry
            leaders to continue to learn and grow without having to leave their ministry
            context<br />
             A minimum of three years ministerial leadership experience after receiving the
            M.Div. or M.A. degree<br />
             A grade point average of 3.0 or higher (3.0 on 4.0 scale)<br />
             One course in biblical language NT Greek or OT Hebrew (This requirement
            may be met through a course in the DMin program)<br /><br />
            <b>Application Requirements</b><br />
             Completed and signed Application for Admission<br />
             One completed pastoral reference form<br />
             One professional reference form<br />
             One personal reference form<br />
             Transcripts or official records that show student meets the above admission
            requirements<br />
             Completed essay on the essay question listed on application, written or typed
            in English on a separate paper – must include applicant’s full name on top<br />
             Doctor of Ministry applicants are required to submit a resume/record of at least
            3 years of full-time ministry experience<br />
          </div>);
  }
  _getProgramDescriptionsContent() {
    return(<div>
            <h1>Program Descriptions</h1>
            Course Codes Courses at International Bible College and University are broken up
            into 6 main categories with a specified amount of credits required in each category
            (see below):<br /><br />
            <b>TH</b> – Theology: courses dealing with specific theological issues (i.e. Survey
            of Theology)
            <br /><br />
            <b>BI</b> – Bible: courses dealing with specific books of the bible, or sections of
            scripture (i.e. Gospel of John)
            <br /><br />
            <b>PM</b> – Practical Ministry: courses dealing with some of the more detailed
            specifics of ministry, main focus of these classes is dealing with others (i.e.
            Bondage Breaking)
            <br /><br />
            <b>PG</b> – Personal Growth: courses dealing with personal issues, main focus of
            these classes is dealing with self (i.e. Bible Study Methods; Knowing My
            Gifts)
            <br /><br />
            <b>IN</b> – Internship Courses: when enrolled in an internship course, the focus is
            learning by doing, “hands on” ministry (e.g. involvement with Worship
            Team; Healing Rooms; Bible Study; Youth Group; Missions Team)
          </div>);
  }
  _getOutlineOfProgramsContent() {
    return(<div>
            <h1>Outline of Programs</h1>
            <h2>Bachelors of Ministry (BM, 4 years)</h2>
            <h3>Year One Course Requirements:</h3>
            PM 112 4 Foundations for Discovery*
            <br />
            PM 115 4 The Christian Life *
            <br />
            4 Kingdom Living/Equipped for Leadership (Spring)*
            <br />
            PM 4 Seminar/Conference
            <br />
            BI 4 one book of Bible
            <br />
            PG/PM 12 Credits
            <br />
            IN 12 Internship Credits: 4 Credits each quarter
            <br />
            ____________________________________________________
            <br />
            <b>Total: 48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Two Course Requirements:</h3>
            TH 8 Survey of Theology
            <br />
            History of Pentecostal Movements
            <br />
            BI 12 Acts, Survey of the NT
            <br />
            PG 4 Church Leadership
            <br />
            PM 8 Electives
            <br />
            IN 16 Internship Credits
            <br />
            ____________________________________________________
            <br />
            <b>Total: 48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Three Course Requirements:</h3>
            TH 8 Electives
            <br />
            BI 8 Electives
            <br />
            PM 4 Electives
            <br />
            IN 28 Internship 10 credits per quarter
            <br />
            ____________________________________________________
            <br />
            <b>Total: 48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Four Course Requirements:</h3>
            TH 4 Electives
            <br/>
            BI 8 Electives
            <br/>
            PM 8 Electives
            <br/>
            IN 28 Electives
            <br/>
            ____________________________________________________
            <br/>
            <b>Total: 48 Credits</b>
            <br/>
            <b>Graduate Total: 192 Credits (Bachelors of Ministry achieved)</b>
            <br/>
            * Required Classes
            <br/><br/><br/><br/>
            <h2>Masters of Ministry (MM, 2 years)</h2>
            <h3>Required Core Courses:</h3>
            TH 501 4 Survey of Theology
            <br />
            TH 502 4 History of Pentecostal Movement
            <br />
            BI 501 4 New Testament Survey
            <br />
            PM 502 4 Bondage Breaking
            <br />
            TH 580 4 Systemic Theology
            <br />
            <h3>Your choice of concentration (52 Credits):</h3>
            Global Leadership Concentration:
            <br />
            *Take leadership classes from PM 501, PM 504, PM 519, PM 520, PM 521, PM 522,
            PM 523, PM 524, PM 570, PM 571.
            <br />
            *3 PG Elective courses
            <br />
            <br />
            Christian Worship and Music Concentration:
            <br />
            *Take classes from PM 509, PM 515, PM 516, PM 519, PM 520, PM 521, PM 522,
            PM 531 (I, II, III)
            <br />
            *3 PG Elective courses
            <br />
            <br />
            Christian Counseling Concentration:
            <br />
            *Take leadership classes from PM 521, PM 526, PM 527, PM 528, PM 529, PM 530,
            PM 541, PM 542, PM 543, PM 544.
            <br />
            *3 PG Elective courses
            ____________________________________________________
            <br />
            <b>Total: 72 Credits</b> (Masters of Ministry achieved)
            <br /><br /><br /><br />

            <h2>Master of Divinity (MDiv,3 Years)</h2>
            <h3>Required Core Courses: 108</h3>
            BI 410 4 Greek I
            <br />
            BI 412 4 GreekII
            <br />
            BI 414 4 Hebrew I
            <br />
            BI 416 4 Hebrew II
            <br />

            <h3>Your Choice of Concentration (68 credits):</h3>
            Global Leadership Concentration:
            <br />
            *Take leadership classes from PM 501, PM 504, PM 519, PM 520, PM 521, PM 522,
            PM 523, PM 524, PM 570, PM 571.
            <br />
            *3 BI Elective courses
            <br />
            *3 TH Elective courses
            <br />
            *3 PM Elective courses
            <br />
            *4 PG Elective courses
            <br /><br />
            Christian Worship and Music Concentration:
            <br />
            *Take classes from PM 509, PM 515, PM 516, PM 519, PM 520, PM 521, PM 522,
            PM 531 (I, II, III)
            <br />
            *3 BI Elective courses
            <br />
            *3 TH Elective courses
            <br />
            *3 PM Elective courses
            <br />
            *4 PG Elective courses
            <br />
            <br />
            Christian Counseling Concentration:
            <br />
            *Take leadership classes from PM 521, PM 526, PM 527, PM 528, PM 529, PM 530,
            PM 541, PM 542, PM 543, PM 544.
            <br />
            *3 BI Elective courses
            <br />
            *3 TH Elective courses
            <br />
            *3 PM Elective courses
            <br />
            *4 PG Elective courses
            <br />
            <h2>Doctor of Ministry (DMin, required minimum 3 years)</h2>
            <br />
            Required Core Courses:
            <br />
            TH 16 2 Theology Elective (800 course level above)
            <br />
            BI 16 2 Bible Elective (700 course level above)
            <br />
            PM 8 1 Practical Ministry Elective (from PM 874 or PM 876)
            <br />
            PM 711 2 Research Workshop
            <br />
            PM 720 6 Doctor’s Thesis
            <br />
            ____________________________________________________
            <br />
            <b>Total: 48 Credits</b> (Doctor of Ministry achieved)
          </div>);
  }
  _getCourseDescriptionsContent() {
    return(<div>
            <h1>General Information</h1>
          </div>);
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
          { ( this.state.currentContentId == 3 ) && this._getEarningCreditContent() }
          { ( this.state.currentContentId == 4 ) && this._getGeneralInformationContent() }
          { ( this.state.currentContentId == 5 ) && this._getAdmissionAndApplicationContent() }
          { ( this.state.currentContentId == 6 ) && this._getProgramDescriptionsContent() }
          { ( this.state.currentContentId == 7 ) && this._getOutlineOfProgramsContent() }
          { ( this.state.currentContentId == 8 ) && this._getCourseDescriptionsContent() }
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
