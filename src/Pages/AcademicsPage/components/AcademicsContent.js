import React from "react";

import presidentImage from '../../../assets/staff/staff_r_kong.png';

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME } from '../../../Container/actionTypes.js'

class AcademicsContent extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      currentContentId: -1,
      currentCourseDescriptionContentId: -1,
    };
    this._updatePageTo = this._updatePageTo.bind(this);
    this._updateContentTo = this._updateContentTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  _updateCourseDescriptionContentTo( courseDescriptionContentId ) {
    this.setState({ currentCourseDescriptionContentId:
      (courseDescriptionContentId !== this.state.currentCourseDescriptionContentId ) ? courseDescriptionContentId : -1 });
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
      default:
        return "default";
    }
  }

  _spaces = (numberOfSpaces) => {
    var spaces = "";
    for( var i = 0; i < numberOfSpaces; i++ ) {
      spaces += ".";
    }
    return(<a style={{ color:'rgb( 0, 0, 0, 0 )' }}>{ spaces }</a>);
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
            <b>Programs</b>
            <br />
            International Bible College and University offers the following programs:
            <br />
            { this._spaces(4) } &#8226;{ this._spaces(4) } Certificate of Ministry (CM, one year bible study program)
            <br />
            { this._spaces(4) } &#8226;{ this._spaces(4) } Bachelor of Ministry (BM, four year program)
            <br />
            { this._spaces(4) } &#8226;{ this._spaces(4) } Master of Ministry (MM, two years program)
            <br />
            { this._spaces(4) } &#8226;{ this._spaces(4) } Master of Divinity (MDiv, three years program)
            <br />
            { this._spaces(4) } &#8226;{ this._spaces(4) } Doctor of Ministry (DMin, minimum 3 years)
            <br />
            <br />
            Details of each program are outlined below:
            <h2>Certificate of Ministry (CM, 1 year)</h2>
            *Courses taken in the Certificate of Ministry are preparatory in nature. Credits are not transferable
            into upper degree programs.
            <br />
            *CM program takes each quarter 16 credits as below and each student must take 2 Bible electives,
            1 PM or PG elective, and 1 PM or TH elective course per quarter.
            <br /><br /><br />
            BI{ this._spaces(12) }8{ this._spaces(10) }2{ this._spaces(2) }Bible Electives
            <br />
            PM/PG{ this._spaces(4) }4{ this._spaces(10) }1{ this._spaces(2) }PM or PG Elective
            <br />
            PM/TH{ this._spaces(4) }4{ this._spaces(10) }1{ this._spaces(2) }PM or TH Elective
            <br />
            ____________________________________________________<br />
            <b>Total:{ this._spaces(5) }16 Credits * 3 Quarters = 48 Credits (Certificate achieved)</b>
            <br />
            <br />
            <br />
            <h2>Bachelors of Ministry (BM, 4 years)</h2>
            <h3>Year One Course Requirements:</h3>
            PM 112{ this._spaces(4) }4{ this._spaces(10) }Foundations for Discovery*
            <br />
            PM 115{ this._spaces(4) }4{ this._spaces(10) }The Christian Life *
            <br />
            { this._spaces(15) }4{ this._spaces(10) }Kingdom Living/Equipped for Leadership (Spring)*
            <br />
            PM{ this._spaces(10) }4{ this._spaces(10) }Seminar/Conference
            <br />
            BI{ this._spaces(12) }4{ this._spaces(10) }one book of Bible
            <br />
            PG/PM{ this._spaces(4) }12{ this._spaces(9) }Credits
            <br />
            IN{ this._spaces(12) }12{ this._spaces(9) }Internship Credits: 4 Credits each quarter
            <br />
            ____________________________________________________
            <br />
            <b>Total:{ this._spaces(5) }48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Two Course Requirements:</h3>
            TH{ this._spaces(10) }8{ this._spaces(10) }Survey of Theology
            <br />
            { this._spaces(27) }History of Pentecostal Movements
            <br />
            BI{ this._spaces(10) }12{ this._spaces(10) }Acts, Survey of the NT
            <br />
            PG{ this._spaces(10) }4{ this._spaces(10) }Church Leadership
            <br />
            PM{ this._spaces(10) }8{ this._spaces(10) }Electives
            <br />
            IN{ this._spaces(10) }16{ this._spaces(10) }Internship Credits
            <br />
            ____________________________________________________
            <br />
            <b>Total:{ this._spaces(3) }48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Three Course Requirements:</h3>
            TH{ this._spaces(10) }8{ this._spaces(10) }Electives
            <br />
            BI{ this._spaces(12) }8{ this._spaces(10) }Electives
            <br />
            PM{ this._spaces(10) }4{ this._spaces(10) }Electives
            <br />
            IN{ this._spaces(11) }28{ this._spaces(8) }Internship 10 credits per quarter
            <br />
            ____________________________________________________
            <br />
            <b>Total:{ this._spaces(4) }48 Credits</b>
            <br /><br /><br /><br />
            <h3>Year Four Course Requirements:</h3>
            TH{ this._spaces(10) }4{ this._spaces(10) }Electives
            <br/>
            BI{ this._spaces(12) }8{ this._spaces(10) }Electives
            <br/>
            PM{ this._spaces(10) }8{ this._spaces(10) }Electives
            <br/>
            IN{ this._spaces(12) }28{ this._spaces(8) }Electives
            <br/>
            ____________________________________________________
            <br/>
            <b>Total: 48 Credits</b>
            <br/><br/>
            <b>Graduate Total: 192 Credits (Bachelors of Ministry achieved)</b>
            <br />
            <br/>
            * Required Classes
            <br/><br/><br/><br/>
            <h2>Masters of Ministry (MM, 2 years)</h2>
            <h3>Required Core Courses:</h3>
            TH 501{ this._spaces(5) }4{ this._spaces(10) }Survey of Theology
            <br />
            TH 502{ this._spaces(4) }4{ this._spaces(10) }History of Pentecostal Movement
            <br />
            BI 501{ this._spaces(6) }4{ this._spaces(10) }New Testament Survey
            <br />
            PM 502{ this._spaces(4) }4{ this._spaces(10) }Bondage Breaking
            <br />
            TH 580{ this._spaces(4) }4{ this._spaces(10) }Systemic Theology
            <br />
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
            <br />
            ____________________________________________________
            <br />
            <b>Total: 72 Credits</b> (Masters of Ministry achieved)
            <br /><br /><br /><br />

            <h2>Master of Divinity (MDiv,3 Years)</h2>
            <h3>Required Core Courses: 108</h3>
            BI 410{ this._spaces(4) }4{ this._spaces(8) }Greek I
            <br />
            BI 412{ this._spaces(4) }4{ this._spaces(8) }GreekII
            <br />
            BI 414{ this._spaces(4) }4{ this._spaces(8) }Hebrew I
            <br />
            BI 416{ this._spaces(4) }4{ this._spaces(8) }Hebrew II
            <br />

            <h3>Your Choice of Concentration (68 credits):</h3>
            <b>Global Leadership Concentration:</b>
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
            <b>Christian Worship and Music Concentration:</b>
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
            <b>Christian Counseling Concentration:</b>
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
            <h4>Required Core Courses:</h4>
            TH{ this._spaces(14) }16{ this._spaces(10) }2 Theology Elective (800 course level above)
            <br />
            BI{ this._spaces(16) }16{ this._spaces(10) }2 Bible Elective (700 course level above)
            <br />
            PM{ this._spaces(14) }8{ this._spaces(12) }1 Practical Ministry Elective (from PM 874 or PM 876)
            <br />
            PM 711{ this._spaces(8) }2{ this._spaces(12) }Research Workshop
            <br />
            PM 720{ this._spaces(7) }6{ this._spaces(12) }Doctor’s Thesis
            <br />
            ____________________________________________________
            <br />
            <b>Total:{ this._spaces(8) }48 Credits</b> (Doctor of Ministry achieved)
          </div>);
  }

  _getCourseDescriptionsContent() {
    return(<div>
            <h1>Course Descriptions</h1>
             0-100 level: Certificate and Bachelor degree courses.
            <br />
             500 level and 600 level: Master degree courses. Master degree course requires at
            least 1500 pages reading or 30 hours practicum during each quarter.
            <br />
             All courses which are 600 and under 600 level are 4 credits except some classes
            marked on specific credits and course description.
            <br />
             700 level and 800 level: Doctor Degree course required at least 3000 pages
            reading.
            <br />
             All 700 and 800 levels are 8 credits.
            <br /><br />
            <button onClick={ () => { this._updateCourseDescriptionContentTo(0) } } style={ style.hyperlinkStyle }>Theology (TH, 4-8 credits)</button>
            { ( this.state.currentCourseDescriptionContentId === 0 ) && <div><hr /></div>}
            { ( this.state.currentCourseDescriptionContentId === 0 ) && this._getCourseDescriptionsTheology() }
            <br /><br />
            <button onClick={ () => { this._updateCourseDescriptionContentTo(1) } } style={ style.hyperlinkStyle }>Bible (BI, 4-8 credits)</button>
            { ( this.state.currentCourseDescriptionContentId === 1 ) && <div><hr /></div>}
            { ( this.state.currentCourseDescriptionContentId === 1 ) && this._getCourseDescriptionsBible() }
            <br /><br />
            <button onClick={ () => { this._updateCourseDescriptionContentTo(2) } } style={ style.hyperlinkStyle }>Practical Ministry (PM, 4-8 credits)</button>
            { ( this.state.currentCourseDescriptionContentId === 2 ) && <div><hr /></div>}
            { ( this.state.currentCourseDescriptionContentId === 2 ) && this._getCourseDescriptionsPracticalMinistry() }
            <br /><br />
            <button onClick={ () => { this._updateCourseDescriptionContentTo(3) } } style={ style.hyperlinkStyle }>Personal Growth (PG, 4 credits)</button>
            { ( this.state.currentCourseDescriptionContentId === 3 ) && <div><hr /></div>}
            { ( this.state.currentCourseDescriptionContentId === 3 ) && this._getCourseDescriptionsPersonalGrowth() }
            <br /><br />
            <button onClick={ () => { this._updateCourseDescriptionContentTo(4) } } style={ style.hyperlinkStyle }>Internship (IN, 4 credits)</button>
            { ( this.state.currentCourseDescriptionContentId === 4 ) && <div><hr /></div>}
            { ( this.state.currentCourseDescriptionContentId === 4 ) && this._getCourseDescriptionsInternship() }
          </div>);
  }
  _getCourseDescriptionsTheology() {
    return(<div><b>TH 101 (501) Survey of Theology</b><br />
            This course provides an overview of the major biblical doctrines including Bibliology,
            Theology Proper, Anthropology, Hamartiology, Soteriology, Christology, Pneumatology,
            Ecclesiology, Angelology, and Eschatology.<br /><br />
            <b>TH 102 (502) Church History (Theology through the Ages)</b><br />
            This course is a study of development of theology through the eras of the church. It will
            examine the different beliefs of the Christian church from the time of Christ until now.<br /><br />
            <b>TH 103 (503) History of Pentecostal Movements</b><br />
            This course is a study of the history of Pentecostalism, including study of major revivals,
            key times, and people in the history of Pentecostalism.<br /><br />
            <b>TH 104 (504) Attributes of God</b><br />
            This will be a study of the many facets of God. Does God know everything? Is He
            everywhere? Is He loving or judging? How do we reconcile the God of the Old and New
            Testaments? This class will go in depth to study the emotions and character of God in a
            search to answer some of these questions.<br /><br />
            <b>TH 105 (505) Worship through the Bible</b><br />
            This is a study of the history and theology of worship, including the topics of the
            tabernacle of David, prophetic instrumentation, banners, flags, dancing, and houses of
            prayer.<br /><br />
            <b>TH 106 (506) The Kingdom of God</b><br />
            What did Jesus have to say about the Kingdom? It was his main message. He
            preached: “The Kingdom of God is at Hand”. In this class, we will study what the
            Kingdom of God is, and its applications for today.<br /><br />
            <b>TH 107 (507) Bibliology</b><br />
            The study of the Bible, in this course you will learn about the interpretation of the
            theology of written scriptures, including what the Bible says about itself. This is a “How
            to Study the Bible” course.<br /><br />
            <b>TH 505 Backgrounds of Contemporary Theology</b><br />
            A selected study of major theologians who continue to influence contemporary
            Christianity.<br /><br />
            <b>TH 108 (508) Christ and Church</b><br />
            In this course students learn about the Church, the Body of Christ, as the manifestation
            of Jesus on the earth. It will examine the relationship between Jesus and the Church and
            how it is an expression of Christ through which his works are now evidenced.<br /><br />
            <b>TH 506 Major Christian Doctrines</b><br />
            This course is an introduction to prominent doctrinal topics of Christian theology.<br /><br />
            <b>TH 508 History of Western Thought</b><br />
            A survey of Western philosophical thought with the purpose of introducing students of
            theology to philosophical ideas which have had a significant influence on the
            development of Christian theology. Students may complete an examination in lieu of the
            course requirement, or the course may be taken concurrently with other required
            courses.<br /><br />
            <b>TH 530 Modern and Contemporary Christian Thought</b><br />
            A study of thought from Enlightenment trends to contemporary theological and
            philosophical developments. The latter subject includes nineteenth century liberalism,
            twentieth century new-orthodoxy, existentialism, and post-existential trends such as
            secular, liberation, and hope theologies. Attention is also given to recent philosophical
            movements such as logical positivism, linguistic analysis and process though. The
            course stresses the history of major ideas, the system of formative scholars, and the
            conservative alternative.<br /><br />
            <b>TH 555 Philosophical Theology</b><br />
            This course employs philosophical methodology to examine the problems of the nature,
            limits and validity of religious knowledge, the meaning of religious languages, and the
            origin and nature of evil.<br /><br />
            <b>TH 580 Systematic Theology</b><br />
            This course is an examination of man as sinner, Christology and the atonement,
            salvation, eschatology and the church.<br /><br />
            <b>TH 612 (812) Biblical Theology</b><br />
            A study of the nature, history and current trends in Biblical theology. Each semester,
            there will be a special focus given to specific areas in Old Testament Biblical Theology or
            New Testament Biblical Theology.<br /><br />
            <b>TH 642 (842) Process Theology</b><br />
            This course is an examination of the theological movement based on the process
            philosophy of Alfred North Whitehead and Charles Hartshorne.<br /><br />
            <b>TH 660 (860) Study in Asian Religious And Philosophical Thoughts</b><br />
            This course is a thematic approach to the study of Asian religious and philosophical
            thoughts. Major themes of Buddhism, Confucianism, and Taoism are identified and
            explored both historically and diachronically (both within their individual contexts and in
            their mutual interactions with one another).<br /><br />
            <b>TH 665 (865) Theology of Christian Spirituality</b><br />
            An exploration of historical and contemporary currents in Christian spirituality. Particular
            attention is given to changes in the theology and practice of spirituality during the 20 th
            century within Protestantism and Roman Catholicism. Students have opportunities to do
            analytic and theory-building work.<br /><br />
            <b>TH 670 (870) The Cultural Context of Theology And Ministry</b><br />
            This course is a study of the impact of culture on the development of theology and the
            practice of ministry.</div>);
  }
  _getCourseDescriptionsBible() {
    return(<div><b>BI 101 (501) Epistles to the Corinthians</b><br />
            This course will teach Paul’s letters to the Corinthians and will include major topics such
            as communion, use of spiritual gifts in the church, and love.<br /><br />
            <b>BI 102 (502) Gospel of John</b><br />
            This will be an in-depth study into the unique view of Jesus’ ministry from the Gospel of
            John.<br /><br />
            <b>BI 103 (503) Old Testament Survey</b><br />
            All books of the Old Testament will be surveyed covering topics such as major people,
            places and events all through the Old Testament.<br /><br />
            <b>BI 104 (504) New Testament Survey</b><br />
            All books of the New Testament will be surveyed covering all topics such as major
            people, places and events all through the New Testament.<br /><br />
            <b>BI 105 (505) Epistles to the Church (Gal-Thess)</b><br />
            These epistles give us detailed information about the actual conditions within the church
            at Corinth. Not even the apostolic churches were perfect! This course will include studies
            in pastoral problems, and application of Christian principles which bring about resolution.<br /><br />
            <b>BI 106 (506) The Book of Acts of the Apostles</b><br />
            This is a study of the birth of the church and the Acts of the Apostles which continue
            today. This study will look at the new church and its relationship to the Holy Spirit to
            discover how we should relate to Him today.<br /><br />
            <b>BI 107 (507) Pentateuch</b><br />
            This course will study the first 5 books of the OT and study topics including: creation, the
            exodus, and the law. With an emphasis on how these books point to the coming
            Messiah, Jesus Christ.<br /><br />
            <b>BI 108 (508) Minor Prophets</b><br />
            This course will cover the books Hosea-Malachi focusing on finding out what these books
            say within their own historical context and how these prophecies paved the way for the
            Messiah.<br /><br />
            <b>BI 109 (509) Pastoral Epistles (Timothy/Titus)</b><br />
            Written to church leaders, these epistles teach us how to oversee the church. In this
            course we will study the Pastoral Epistles to not only find insight for pastors, but
            leadership principles critical for the home, the workplace, and anywhere you may find
            yourself responsible for leading and caring for other people.<br /><br />
            <b>BI 110 (510) Eschatology (Revelation/Daniel)</b><br />
            The books of Revelation and Daniel will be studied in terms of prophecy and the
            application of prophecy to current events. This course will include discussion on the last
            days.<br /><br />
            <b>BI 111 (511) Poetry Books</b><br />
            This course is designed to learn the five poetry books: Job, Psalms, Proverbs,
            Ecclesiastes, and Song of Songs. This course will give students the whole structure of
            the five books and their major contents. In studying the heart of the Bible, students can
            learn the mind of God.<br /><br />
            <b>BI 112 (512) Gospel - The Living Life of Christ</b><br />
            This course is to teach the four books of the Gospel: Matthew, Mark, Luke and John.
            This main focus is Jesus’ ministry through these four books.<br /><br />
            <b>BI 410 Greek I</b><br />
            A study of phonology, morphology, and grammar of New Testament Greek with an
            emphasis placed on vocabulary development. Covers reading, writing, verb conjugation,
            and other parts of speech. It also introduces Greek customs, culture, and politics of the
            inter-testaments period.<br /><br />
            <b>BI 412 Greek II</b><br />
            Greek II is a continuation of Greek I. This course emphasizes nouns, verbs, infinitives,
            adjectives, and pronouns. Voice, extension and tense are also covered.<br /><br />
            <b>BI 414 Hebrew I</b><br />
            Fundamentals of biblical Hebrew with a focus on pronunciation, vocabulary, and the
            basic grammar in the usage of the Hebrew language. Hebrew I is to be used for
            translation and written exercises. Selected readings in biblical texts will be covered.<br /><br />
            <b>BI 416 Hebrew II</b><br />
            BS 416 is a continuation of BS 414. It provided further study of Hebrew grammar with
            emphasis on morphology, phonology, syntax, vocabulary, and the understanding of the
            abbreviations and marks in the Hebrew Bible. Selected passages will be read from the
            Old Testament.<br /><br />
            <b>BI 505 Basic Aspects of the Hebrew Bible</b><br />
            An introduction to the content of Hebrew Bible Literature, and to the methods for its
            interpretation.<br /><br />
            <b>BI 507 Basis Aspects of the Study of the New Testament</b><br />
            An introduction to the history and literature of the Christian movement in the first and
            second centuries, with particular focus on the New Testament. This course is a
            prerequisite to all other courses in New Testament. Students may proceed to advanced
            New Testament courses by passing a prescribed examination lieu of taking the course.<br /><br />
            <b>BI508 Basic Aspects of the Study of the Old Testament</b><br />
            A survey of the history and literature of the Old Testament, with special attention paid to
            significant events (e.g., creation, the Exodus from Egypt), outstanding persons (e.g.,
            Moses), and dominant theological motifs (e.g., redemption). An emphasis will be made
            on certain books which advance and develop one’s grasp of the holistic message of
            Scripture.<br /><br />
            <b>BI 523 Old Testament Backgrounds</b><br />
            An exploration of Egyptian, Babylonian, Assyrian, and Persian backgrounds of the Old
            Testament, designed to provide the student with an understanding of the Old Testament
            world.<br /><br />
            <b>BI 530 Moral Issues in the Old Testament</b><br />
            An examination of the moral values that govern human behavior in the Old Testament.
            Special attention will be devoted to the relationship between moral behavior and its
            theological foundations.<br /><br />
            <b>BI 533 Old Testament Ethics</b><br />
            This course is designed to acquaint students with the ethical teachings of the Old
            Testament, and to probe the relevance of Old Testament ethics for a contemporary
            personal and social ethic.<br /><br />
            <b>BI 537 the Old Testament in Global Perspective</b><br />
            Learn how the Old Testament has been used and interpreted in Africa, Asia and Latin
            America and explore the important relationship between biblical interpretation and one’s
            socio-cultural context.<br /><br />
            <b>BI 540 Old Testament Interpretations</b><br />
            General introduction and hermeneutics: historical, cultural, and religious background; the
            language and translation of the New Testament; textual criticism; the theological Raison
            d’etre of the New Testament; The New Testament books as canon; the principles and
            practice of New Testament exegesis.<br /><br />
            <b>BI 543 New Testament Backgrounds</b><br />
            A study of the Greek, Roman and Jewish backgrounds of the New Testament is made in
            order to give the New Testament student an understanding of the world of Jesus and the
            Early Church. Extensive readings in representative texts from the New Testament period,
            including the Dead Sea Scrolls.<br /><br />
            <b>BI 558 New Testament Ethics</b><br />
            This course is designed to acquaint students with the ethical teachings of the New
            Testament, and to probe the relevance of New Testament ethics for a contemporary
            personal and social ethic.<br /><br />
            <b>BI 560 New Testament Theology</b><br />
            A study of the history and methods of biblical theology and examination of the major
            themes of the principal New Testament writers in the light of their historical backgrounds.<br /><br />
            <b>BI 585 Exegesis of the New Testament</b><br />
            A study of various tools of New Testament investigation and the praxis of interpretation of
            selected texts.<br /><br />
            <b>BI 608 The Church in the New Testament</b><br />
            An examination of New Testament sources dealing with the early Church in its various
            communities, including its social composition, rituals, customs of worship, and
            organization. Important documents concerning the Church from other early Christian
            literature are also examined.<br /><br />
            <b>BI 620 Eschatology and the New Testament</b><br />
            A study of various eschatologists of the New Testament and the early Christian
            movement from their beginnings in the ancient Near East into the second century.
            Course includes a survey of early Christian views of the Combat of God and the Devil,
            life after death, the judgment, heaven and hell, and the Eschaton both personal and
            cosmic.<br /><br />
            <b>BI 640 Acts, Canonical and Apocryphal</b><br />
            The study of the so-called Apocryphal Acts of Apostles, especially The Acts of Paul, The
            Acts of Peter, The Acts of John, The Acts of Andrew, and The Acts of Thomas. Topics
            treated include the religious orientation of each of the Acts, the relationships among
            those Acts and the New Testament, the role of apostolic memory in the early church, the
            depictions of women in these texts, and the value of the Apocryphal Acts for
            understanding the diversity of the early church.<br /><br />
            <b>BI 710 Special Study: Old and/or New Testament</b><br />
            Individual study projects involving library research in the field of the Old and/or New
            Testament.<br /><br />
            <b>BI 712 Old Testament Survey</b><br />
            All books of the Old Testament will be surveyed, covering topics such as major people,
            places, and events all through the Old Testament.<br /><br />
            <b>BI 714 New Testament Survey</b><br />
            All books of the New Testament will be surveyed, covering all topics such as major
            people, places, and events all through the New Testament.</div>);
  }
  _getCourseDescriptionsPracticalMinistry() {
    return(<div><b>PM 001, 002, 003, 004, 005, 006 Chapel I, II, III, IV, V, VI</b><br />
            Attendance at and participation in quarterly chapels are an essential part of a student’s
            studies. Fellowship with God and others through chapel is an integral part of every
            program. (No credit)<br /><br />

            <b>PM 010, 011, 012 Bible Reading 1, 2, 3</b><br />
            This course explores scripture through biblical stories and teachings in the Old
            Testament and New Testament. It is designed to develop a deeper understanding of
            scripture and how it applies to one’s personal life as well as in a ministry setting.
            <br /><br />
            <b>PM 020, 021, 022 Listening to God and to Others 1, 2, 3</b><br />
            This three sequential courses offer about listening skills. When God is speaking to you by
            prophecy or preacher’s teaching, you have to have full understanding.
            <br /><br />
            <b>PM 030, 031, 032 Speaking Cross-Culturally 1, 2, 3</b><br />
            You will be equipped with speaking skills with these courses. Students are required to
            speak 5 minutes sermon and testimony after each course.
            <br /><br />
            <b>PM 040, 041, 042 Writing a Life Journal 1, 2, 3</b><br />
            This course is designed to write correct journal. As a Christian, writing journal according
            to biblical teaching is critical. Student will learn from very basic writing style and more
            advanced writing. Eventual goal is to write daily life journal.
            <br /><br />
            <b>PM 050, 051, 052 Principles of Communication 1, 2, 3</b><br />
            This course is to teach Biblical grammar in English for adult. This class will teach basic
            concept to understand Biblical English.
            <br /><br />
            <b>PM 060, 061, 062 Community Service 1, 2, 3</b><br />
            As people of God, loving people is core teaching of Jesus. Students will visit homeless
            facility, nursing home, and other non-profit organization in this activity. Students are
            required to report before class after serving neighbors with writing and speaking.
            <br /><br />
            <b>PM 070, 071, 072 Literary Terminology 1, 2, 3</b><br />
            These series of classes are to practice terminology for biblical study and missionary
            work..
            <br /><br />
            <b>PM 101 (501) Healing</b><br />
            This course will study the topic of physical healing. In this class, you will learn what the
            bible says about healing, along with practical advice and opportunities to minister right in
            class.
            <br /><br />
            <b>PM 102 (502) Bondage Breaking</b><br />
            This course will study bondage breaking, including topics such as generational sins, soul
            ties, covenants, and much more.
            <br /><br />
            <b>PM 103 (503) Cleansing the Land</b><br />
            This is a course on praying for cities and regions, and breaking curses off of the land.
            You will learn about the dynamics of praying intentionally and specifically for a city or
            region, spiritual mapping, and seeing the fruit of this ministry.
            <br /><br />
            <b>PM 104 (504) Role of the Leader (Prophet, Priest and King)</b><br />
            The three main areas of Christian leadership are the roles of prophet, priest, and king.
            This course will study the purpose and actions involved as you walk out these three main
            roles in your life.
            <br /><br />
            <b>PM 105 (505) Hermeneutics</b><br />
            The study of interpreting the Bible: We will study, historical, contextual, allegorical, and
            topical aspects. As well as learning some tools for understanding the original languages
            of the Bible.
            <br /><br />
            <b>PM 106 (506) Spiritual Gifts and Ministries</b><br />
            Learn how to identify, operate, and grow in the gifts; including study of the gifts to the
            church, gifts of the Holy Spirit, and the grace gifts that God has built into us.
            <br /><br />
            <b>PM 107 (507) Preaching (Homiletics)</b><br />
            Whether it’s in front of a church or a small group, this class will teach you the practicality
            of preaching with clarity and impact. Study tools for preparing sermons will be taught.
            <br /><br />
            <b>PM 108 (508) Coaching and Mentoring Disciples</b><br />
            All ministry flows out of relationships. This class will impart practical tools for coaching
            others in their life and growth in Jesus.
            <br /><br />
            <b>PM 109 (509) The Foundation of Worship</b><br />
            This course will study the role of worship in our daily lives. What does worship mean?
            What does it look like? There will be an emphasis on prophetic worship through
            instrumentation, song, dance, flagging, and the arts.
            <br /><br />
            <b>PM 110 (510) Church Administration</b><br />
            In this class, we will study some of the roles of vision casting, financial administration,
            volunteerism, conflict resolution, group dynamics, and communication. We will also
            study the eight essential measurements for a healthy church.
            <br /><br />
            <b>PM 111 (511) Building Ministries that Multiply</b><br />
            This class instructs in creating models that multiply, and will investigate church planting
            models and identify stages of maturity in a ministry or church. This class is essential for
            those desiring to plant churches.
            <br /><br />
            <b>PM 112 (512) Foundations for Discovery</b><br />
            This course provides an introduction to Christian Growth and discipleship. It enables the
            learner to understand the basic issues of spiritual growth, the church and mission, and
            releasing gifts for ministry.
            <br /><br />
            <b>PM 113 (513) Disciplines of the disciple</b><br />
            This course focuses on the more advanced preparation, biblical study, prayer, and
            development of Christian Character.
            <br /><br />
            <b>PM 114 (514) Bible Basics</b><br />
            This course provides effective and relevant introduction to the Old and New Testaments.
            The last three lessons focus on putting the Christian faith into practice.
            <br /><br />
            <b>PM 115 (515) The Christian Life</b><br />
            This course builds a strong and relevant foundation for a healthy family life and church
            life.
            <br /><br />
            <b>PM 116 (516) Kingdom Living</b><br />
            This course provides detailed training for Christian living and ministry, focusing on a
            more Pentecostal approach to spiritual warfare and ministry.
            <br /><br />
            <b>PM 117 (517) Equipped for Leadership</b><br />
            This course provides a thorough and practical approach to the call to ministry, mentoring,
            and church administration.
            <br /><br />
            <b>PM 118 (518) Seminar: Prophecy</b><br />
            This course is designed to know God’s revelation through prophecy. Students will learn
            the way of God’s revelation and will have practical time with guest speakers or prophets.
            <br /><br />
            <b>PM 119 (519) A Biblical Theology of Worship</b><br />
            This course will explore the concept and practice of worship in the Old and New
            Testaments. Students will be taught a biblical theology of worship that takes into account
            the variety of biblical materials related to worship. This course serves as a foundation for
            present and future ministry.
            <br /><br />
            <b>PM 120 (520) The History of Christian Worship</b><br />
            This course is an overview of the history of Christian worship, its theology and rituals
            from the early church to today. Special attention is paid to the rites of the first four
            Christian centuries and the theology of worship inspired by their development. Events
            and cultures engendering subsequent ecclesial groups and forms of worship are also
            explored.
            <br /><br />
            <b>PM 121 (521) Spirituality in a Postmodern World</b><br />
            This course will focus on the shift from modernity, with its emphasis on reason and logic,
            to postmodernity and its attraction to the spiritual and symbolic. Course material
            examines cultural trends in theology, philosophy and epistemology. The centerpiece of
            the course is a close-up look at the emerging postmodern world through the lenses of
            thought, art, architecture and society.
            <br /><br />
            <b>PM 122 (522) Cross-Cultural Perspectives in Christian Worship</b><br />
            This course explores the impact of globalization on Christian worship in the 21st century.
            Students will examine a wide variety of contemporary cultural expressions of worship,
            and seek to understand how these expressions reveal the triune God. Students will also
            reflect on how understanding these expressions might enable deeper engagement with
            the triune God in the student’s own worship setting.
            <br /><br />
            <b>PM 132 (532) Mentoring Skills for Leaders</b><br />
            This course provides mentoring skills in local church settings. Learn how to be a good
            mentor and how you can be a good model as a leader.
            <br /><br />
            <b>PM 123 (523) Leadership Ethics in the Old Testament</b><br />
            This course focuses on developing a leader’s ethical standards in modern life based on
            Old Testament examples like Moses, Abraham, Joshua, and David.
            <br /><br />
            <b>PM 124 (524) The Personal Life of the Leader</b><br />
            The life of a leader is very influential not only the church, but also at home and in the
            community. This course will teach on the best model of leadership.
            <br /><br />
            <b>PM 125 (525) Psychology of Religion</b><br />
            This course is an overview of major theories, issues, data, and research methodologies
            of the psychology of religion, with an emphasis on contemporary trends including
            cognitive and evolutionary approaches. It is highly recommended as part of the
            integration curriculum, especially for those who plan on undergraduate teaching careers.
            <br /><br />
            <b>PM 126 (526) Training Lay Counselors in local church</b><br />
            This course will provide an overview of a biblical approach to lay Christian counseling,
            and will cover a model developed by the course instructor for training and using lay
            Christian counselors in the church. Other lay training models and programs in Christian
            counseling, and relevant literature on lay pastoral care in general, will also be briefly
            reviewed.
            <br /><br />
            <b>PM 127 (527) Biblical Counseling</b><br />
            This course will provide an overview of a biblical approach to Christian counseling, and
            will search the biblical model developed by the course in Old and New Testaments,
            training and using Christian counselors in the church.
            <br /><br />
            <b>PM 128 (528), 129 (529), 130 (530) Practicum Faculty Consultation I, II, III</b><br />
            This course is the final in the Clinical Foundations I, II and III sequence. This experiential
            course will equip students with theoretical concepts and practical core methods for
            practicing therapy with couples and parent-child dyads based on Christian teaching. The
            focus of this course will be in the application of theory to case conceptualization and
            therapeutic practice using Structural Family Therapy and Solution Focused Therapy
            theories and techniques. Under the direction of seasoned therapist, and through the
            medium of a specially equipped observation room with a one-way mirror, students will
            practice various assessment and family therapy techniques by participating as therapists
            in simulated marital and/or parent-child therapy sessions.
            <br /><br />
            <b>PM 131 (531) Practice of Worship Leading I, II, III</b><br />
            This class is a sequential series designed to help develop worship leading skills through
            training in instruments, power point, and song leading in various styles.
            <br /><br />
            <b>PM 141 (541) Spiritual Transformation Course 1: Foundations</b><br />
            This course is to build the basics foundation of biblical truths through the study of the
            following: the Trinity, being born again, baptisms, enlarging your spirit, elementary
            doctrines, principle of giving and forgiveness.
            <br /><br />
            <b>PM 142 (542) Spiritual Transformation Course 2: Hearing God</b><br />
            The second course in this series will help students discover the various ways God
            communicates with his children. Students will learn how to apply the exercises in hearing
            God individually and in a group setting.
            <br /><br />
            <b>PM 143 (543) Spiritual Transformation Course 3: Knowing My Design Gift</b><br />
            Why do you do the things you do? The third course in this series will help students
            understand the seven Design Gifts from Romans 12. This study greatly affects the way in
            which we look at people, relationships, leadership and ministry.
            <br /><br />
            <b>PM 144 (544) Spiritual Transformation Course 4: Bondage Breaking</b><br />
            This course is designed to give students practical spiritual tools to understand and
            overcome negative soul ties, generational sins, ungodly covenants, and more. This is a
            life changing class giving students resources and understanding directly applicable to
            their ministries.
            <br /><br />
            <b>PM 160 Spanish for Missions</b><br />
            This course is an excellent resource for those looking to minister to Spanish Speakers in
            their community or abroad vocabulary focuses on family, the Bible, Christian
            expressions, everyday communication and witnessing.
            <br /><br />
            <b>PM 170 (570) Church Management and Leadership</b><br />
            This course is designed to teach students management and leadership in the church or
            nonprofit sector. This course will cover the spirit of Jesus’ servant-hood and leadership in
            church.
            <br /><br />
            <b>PM 171 (571) The Voluntary Nonprofit Sector and Public Policy</b><br />
            This class is designed to teach students a basic understanding of public policy pertaining
            to the voluntary nonprofit sector. This class will largely focus on policies pertaining to
            work and volunteering in a church or ministry related environment.
            <br /><br />
            <b>PM 172 (572) Financial Management of Religious Organizations</b><br />
            This course will cover financial management of the church organization. Because
            finances are a challenging and crucial part of the church, students will gain tools and
            learn techniques for budgeting, planning, analyzing, and controlling the financial
            performance of a church or non-profit organization.
            <br /><br />
            <b>PM 173 (573) Human Resources Management in Church Related Sectors</b><br />
            This class is about how to hire people in the Church. The class will focus on biblical
            teaching about people, work, and hiring.
            <br /><br />
            <b>PM 711 Research Workshop (2)</b><br />
            An introduction to research workshop, including research mission, collection of data, data
            analysis, and interpretation of data.
            <br /><br />
            <b>PM 720 Doctor’s Thesis (6)</b><br />
            This course is required class for doctoral student. Each student need to write and report
            the study of a well-defined problem that both emerges from and carries forward some
            existing body of knowledge or theory.
            <br /><br />
            <b>PM 870 Church Management and Leadership</b><br />
            This course is to understand about Church or nonprofit sector’s management and
            leadership. This course will cover the spirit of Jesus’ servant-hood and leadership in
            church
            <br /><br />
            <b>PM 872 A Biblical Theology of Worship</b><br />
            This course will explore the concept and practice of worship in the Old and New
            Testaments. Students will be taught a biblical theology of worship that takes into account
            the variety of biblical materials related to worship. This course serves as a foundation for
            present and future ministry.
            <br /><br />
            <b>PM 874 Expository Preaching</b><br />
            This course is designed to make progress in preaching skills based on scripture analysis.
            <br /><br />
            <b>PM 876 Evangelistic Preaching</b><br />
            This class is to develop powerful preaching in mission field or local setting for
            evangelistic emphasis.</div>);
  }
  _getCourseDescriptionsPersonalGrowth() {
    return(<div><b>PG 101 (501) Bible Study Methods</b><br />
            Have you ever stared at your Bible puzzled and confused? This class will give you keys
            on how to unlock the scriptures and develop a great love for the Word of God. Attention
            will be given to modern computer software programs as well as traditional books and
            tools.
            <br /><br />
            <b>PG 102 (502) Walking in Righteousness</b><br />
            As a believer you are now prone to righteousness, this means you are a new creation
            and the fruit of the Spirit is flowing through you, this class will equip you with some
            practical tools to walk in spirit led, self-control and become the “Royal Priesthood” you
            are called to be in the Bible.
            <br /><br />
            <b>PG 103 (503) Christian Marriage and Family</b><br />
            This course will study the topic of family life from a biblical worldview. Learn how to raise
            Godly children in a loving, Godly home.
            <br /><br />
            <b>PG 104 (504) Money Management</b><br />
            A basic skill in life is money management, this course will help guide you through basic
            money and finance skills in personal life, and ministry. You will learn what a non-profit is,
            and what that means, alongside with resources for those in full time ministry and
            personal accounting skills.
            <br /><br />
            <b>PG 105 (505) Knowing My Design Gift</b><br />
            Knowing God’s design is very critical as minister or lay person. This course will give
            instruction on how to recognize each person’s gift(s) based on Biblical teaching. There
            will be time for practical application for each person in the middle of the session.
            <br /><br />
            <b>PG 106 (506), 107 (507), 108 (508) Musical Instrument I, II, III</b><br />
            This course is a musical instrument sequence in the first year as basic and intermediate
            level training. This class is designed to teach how to lead worship during Sunday service
            or other meetings.
            <br /><br />
            <b>PG 115 (515), 116 (516), 117 (517) Musical Instrument IV,V,VI</b><br />
            This course is a continued musical instrument sequence in the second year. This class is
            designed for the advanced student who already leads worship.
            <br /><br />
            <b>PG 112 (512), 113 (513), 114 (515) Vocal Training I, II, III</b><br />
            This course is a vocal sequence designed to train students on how to lead worship. This
            sequence develops students from beginner to intermediate and advanced levels.
            <br /><br />
            <b>PG 115 (515), 116 (516), 117 (517) Internship I, II, III</b><br />
            This course is a sequential internship in the first year program. Each student will be
            paired with one mentor who is an expert in a specific area. Students will meet four times
            with this mentor during each quarter with the student: 1) First two hour meeting is for
            setting goals for the quarter; 2-4) The second, third and fourth meeting exist to monitor
            the progress of the student and his plan, grade homework, and make course corrections.
            Each 6 credit internship class requires a minimum of 6 hours each week of leading a
            portion of a ministry in a supervised setting, or observing their mentor in action.
            <br /><br />
            <b>PG 118 (518), 119 (519), 210 (520) Internship IV, V, VI</b><br />
            This course continues the internship in sequence in the second year program.
            <br /><br />
            <b>PG 142 Spiritual Transformation Course 2: Hearing God</b><br />
            See PM 142 for course description.
            <br /><br />
            <b>PG 211 (521), 212 (522), 213 (523), 214 (524), 215 (525), 216 (526) Independent Study
            I, II, III, IV, V, VI</b><br />
            This course is designed for students to independently study and research varying
            situations and subjects relating to their course of study.
            <br /><br />
            <b>PG 217 (527) Deep Calls to Deep</b><br />
            This course teaches on listening to the voice of God. The first half focuses on biblical
            teaching about God’s heart; the second half focuses on the practical application of this in
            individual and group settings.
            <br /><br />
            <b>PG 218 (528) Holy Spirit Encounter</b><br />
            Learn how to identify, operate, and grow in the gifts. This course includes study of the
            gifts to the church, gifts of the Holy Spirit, and the grace gifts that God has built into us.
            This class is designed as a weekend conference and two days class with teachings and
            discussions.</div>);
  }
  _getCourseDescriptionsInternship() {
    return(<div><b>IN 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            118, 119, 120, 121, 122, 123 Internship</b><br />
            This courses’ focus is learning by doing, “hands on” ministry. The examples are
            involvement with Worship Team; Healing Rooms; Bible Study; Youth Group;
            Missionary Team. But it is possible to train in so many areas in the church and
            community as a future minister. If you have specific areas to work with, you have to
            ask to the school administer to have permit.</div>);
  }

  render() {
    return(
      <div style={ style.container }>
        <div style={{ width: 550,  marginLeft: '5%', marginTop: 30 }}>
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

          { ( this.state.currentContentId === -1 ) && this._getAcademicMenu() }
          { ( this.state.currentContentId === 0 ) && this._getAttendancePolicyContent() }
          { ( this.state.currentContentId === 1 ) && this._getAcademicPolicyContent() }
          { ( this.state.currentContentId === 2 ) && this._getClassScheduleContent() }
          { ( this.state.currentContentId === 3 ) && this._getEarningCreditContent() }
          { ( this.state.currentContentId === 4 ) && this._getGeneralInformationContent() }
          { ( this.state.currentContentId === 5 ) && this._getAdmissionAndApplicationContent() }
          { ( this.state.currentContentId === 6 ) && this._getProgramDescriptionsContent() }
          { ( this.state.currentContentId === 7 ) && this._getOutlineOfProgramsContent() }
          { ( this.state.currentContentId === 8 ) && this._getCourseDescriptionsContent() }
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <hr />
          <br />
        </div>

        <div style={{ width: 550, marginLeft: '5%' }}>
          <div style={{ marginTop: 30, fontWeight: 'bold' }}>
            Message from the President
          </div>
          <div style={{ width: '80%' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, display:'flex', justifyContent: 'center-left', alignItems: 'center' }}>
                <img alt="presidentFace" src={ presidentImage } style={{ width: 404/2.5, height: 433/2.5 }} />
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
    flexWrap: 'wrap'
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
