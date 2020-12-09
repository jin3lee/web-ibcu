import React from "react";

import { connect } from 'react-redux';

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
import whangSunKyu from './../../../assets/staff/staff_icon/Whang_SunKyu.png';
import hanhSungChu from './../../../assets/staff/staff_icon/Hanh_SungChu.png';
import defaultIcon from './../../../assets/staff/staff_icon/default.png';

import StaffCard from './StaffCard.js';

class StaffContent extends React.Component {

  render() {
    return(
      <div style={ style.container }>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
          <StaffCard staffId="Richard-Kong" firstName="Richard" lastName="Kong" title="Board of Director & President & Secretary" imgSrc={ kongRichard }/>
          <StaffCard staffId="YongSeok-Han" firstName="Yong Seok" lastName="Han" title="Board of Director & Honorary Chairman & Instructor" imgSrc={ hanYongSeok }/>
          <StaffCard staffId="ChongCheh-Ko" firstName="Chong Cheh" lastName="Ko" title="Board of Director & Treasurer" imgSrc={ koChongCheh }/>
          <StaffCard staffId="SungChu-Hanh" firstName="Sung Chu" lastName="Hanh" title="Board of Director & Instructor" imgSrc={ hanhSungChu }/>
          <StaffCard staffId="SunKyu-Whang" firstName="Sun Kyu" lastName="Whang" title="Board of Director & Instructor" imgSrc={ whangSunKyu }/>
          <StaffCard staffId="Esther-Jang" firstName="Esther" lastName="Jang" title="Director of Admissions and Records" imgSrc={ defaultIcon }/>
          <StaffCard staffId="Mike-Banks" firstName="Mike" lastName="Banks" title="Instructor" imgSrc={ bankMike }/>
          <StaffCard staffId="ChoonWon-Chang" firstName="Choon Won" lastName="Chang" title="Instructor" imgSrc={ changChoonWon }/>
          <StaffCard staffId="Jack-DeBay" firstName="Jack" lastName="DeBay" title="Instructor" imgSrc={ debayJack }/>
          <StaffCard staffId="Shirl-DeBay" firstName="Shirl" lastName="DeBay" title="Instructor" imgSrc={ debayShirl }/>
          <StaffCard staffId="Paul-Kim" firstName="Paul" lastName="Kim" title="Instructor" imgSrc={ kimPaul }/>
          <StaffCard staffId="Ezra-Kyung" firstName="Ezra" lastName="Kyung" title="Instructor" imgSrc={ kyungEzra }/>
          <StaffCard staffId="Ken-Southcott" firstName="Ken" lastName="Southcott" title="Instructor" imgSrc={ southcottKen }/>
          <StaffCard staffId="Terry-Tarsiuk" firstName="Terry" lastName="Tarsiuk" title="Instructor" imgSrc={ tarsiukTerry }/>
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
