import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';
import { PAGE_ID_HOME, PAGE_ID_STAFF } from '../../../Container/actionTypes.js'

import bankMike from './../../../assets/staff/staff_icon/Banks_Mike.png';
import changChoonWon from './../../../assets/staff/staff_icon/Chang_Choon_Won.png';
import debayJack from './../../../assets/staff/staff_icon/DeBay_Jack.png';
import debayShirl from './../../../assets/staff/staff_icon/DeBay_Shirl.png';
import hanYongSeok from './../../../assets/staff/staff_icon/Han_Yong_Seok.png';
import kimPaul from './../../../assets/staff/staff_icon/Kim_Paul.png';
import koChongCheh from './../../../assets/staff/staff_icon/Ko_Chong_Cheh.png';
import kongRichard from './../../../assets/staff/staff_icon/Kong_Richard.png';
import kyungEzra from './../../../assets/staff/staff_icon/Kyung_Ezra.png';
import southcottKen from './../../../assets/staff/staff_icon/Southcott_Ken.png';
import tarsiukTerry from './../../../assets/staff/staff_icon/Tarsiuk_Terry.png';
import defaultIcon from './../../../assets/staff/staff_icon/default.png';

import StaffCard from './StaffCard.js';

class StaffContent extends React.Component {

  constructor( props ) {
    super( props );
    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  render() {
    return(
      <div style={ style.container }>

        <div style={{ width: 400, marginLeft: '10%', marginTop: 30 }}>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'rgb(90, 90, 90)' }}>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_HOME ) } } style={ style.backFlowButtonStyle }>
              Home
            </button>
            <div style={ style.backFlowButtonStyle }>
              >
            </div>
            <button onClick={ () => { this._updatePageTo( PAGE_ID_STAFF ) } } style={ style.backFlowButtonStyle }>
              Faculty & Staff
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
          <StaffCard firstName="Richard" lastName="Kong" title="Board of Director & President & Secretary" imgSrc={ kongRichard }/>
          <StaffCard firstName="Yong Seok" lastName="Han" title="Board of Director & Honorary Chairman & Instructor" imgSrc={ hanYongSeok }/>
          <StaffCard firstName="Chong Cheh" lastName="Ko" title="Board of Director & Treasurer" imgSrc={ koChongCheh }/>
          <StaffCard firstName="Mike" lastName="Banks" title="Instructor" imgSrc={ bankMike }/>
          <StaffCard firstName="Choon Won" lastName="Chang" title="Instructor" imgSrc={ changChoonWon }/>
          <StaffCard firstName="Jack" lastName="DeBay" title="Instructor" imgSrc={ debayJack }/>
          <StaffCard firstName="Shirl" lastName="DeBay" title="Instructor" imgSrc={ debayShirl }/>
          <StaffCard firstName="Paul" lastName="Kim" title="Instructor" imgSrc={ kimPaul }/>
          <StaffCard firstName="Ezra" lastName="Kyung" title="Instructor" imgSrc={ kyungEzra }/>
          <StaffCard firstName="Ken" lastName="Southcott" title="Instructor" imgSrc={ southcottKen }/>
          <StaffCard firstName="Esther" lastName="Jang" title="Director of Admissions and Records" imgSrc={ defaultIcon }/>
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
    flexWrap: 'wrap',
    justifyContent: 'left'
  },
  backFlowButtonStyle: {
    marginRight: 10,
    display: 'flex',
    border: "0px solid #000000",
    backgroundColor: 'rgb(0, 0, 0, 0)',
    fontWeight: 'bold',
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( StaffContent );
