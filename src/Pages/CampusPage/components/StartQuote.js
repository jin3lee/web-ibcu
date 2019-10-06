import React from "react";

class StartQuote extends React.Component {

  render() {
    return(
      <div style={ style.kickstarterContainer }>
        <div style={{ fontFamily: 'Arial', color: 'black', fontWeight:'bold', marginBottom:25, }}>GET STORAGE TANK INSURANCE</div>
        <form onSubmit={ this._handleSubmit }>
          <div style={{ fontFamily: 'Arial', marginBottom: 5 }}>Applicant  Company</div>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', fontSize: 15 }} type="text" name='email' placeholder='Applicant Company Name*' onChange={ this._handleChange } />

          <div style={{ fontFamily: 'Arial', marginBottom: 5, marginTop: 20 }}>Applicant  Information</div>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, fontSize: 15 }} type="text" name='password' placeholder='Applicant Physical Address*' onChange={ this._handleChange }/>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, fontSize: 15 }} type="text" name='password' placeholder='Suite #' onChange={ this._handleChange }/>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, fontSize: 15 }} type="text" name='password' placeholder='Zip *' onChange={ this._handleChange }/>

          <div style={{ fontFamily: 'Arial', marginBottom: 5, marginTop: 20 }}>Mailing Information</div>
          Same as physical address <input type="checkbox" name='password' placeholder='Zip *' onChange={ this._handleChange }/>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, fontSize: 15 }} type="text" name='password' placeholder='Applicant Mailing Address*' onChange={ this._handleChange }/>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, fontSize: 15 }} type="text" name='password' placeholder='Suite #' onChange={ this._handleChange }/>
          <input style={{ width: '92%', height: '2.8rem', borderRadius: 5, border: 0, padding: '0px 12px', marginTop: 5, marginBottom: 10, fontSize: 15 }} type="text" name='password' placeholder='Zip *' onChange={ this._handleChange }/>
        </form>
      </div>
    );
  }
}

const style = {
  kickstarterContainer: {
    overflow: "hidden",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(248, 248, 248)",
    height: 600,
  },
  kickstarterContentStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 81,
  },
  kickstarter_button_style:{
    color: "black",
    fontSize: 18,
    backgroundColor: "#1A9AED",
    marginRight: 10,
    marginTop: 30,
    width: 281,
    height: 81,
    border: ".1px solid #000000",
  },
  kickstarter_project_name_style:{
    fontSize: 55,
    marginBottom: 35,
    color: "yellow"
  },
  kickstarter_project_description_style:{
    marginBottom: 10,
  },
  kickstarter_project_description_common_style:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: 15,
  }
}

export default StartQuote;
