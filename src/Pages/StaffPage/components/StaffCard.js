import React from "react";

class StaffCard extends React.Component {

  render() {
    return(
        <div style={ style.container }>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={ this.props.imgSrc } style={ style.logoStyle } alt="staffPhoto"/>
          </div>
          <div style={{
                        flex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: 20
                      }}>
            <div style={{ marginBottom: 2, fontSize: 20, fontFamily: 'Avenir', fontWeight: 'bold'}}>
              <div style={{ fontFamily: 'roboto', textDecoration: 'none', color: 'black' }}>
                { this.props.firstName } { this.props.lastName }
              </div>
            </div>
            <div style={{ color: '#0C54A3', fontSize: 14}}>
              { this.props.title }
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
    flexWrap: 'wrap',
    justifyContent: 'left',
    width: 300,
    height: 100,
    margin: 5,
    paddingLeft: 5, 
    paddingRight: 10,
    borderRadius: 5,
    border: '2px solid',
    borderColor: 'rgba(50, 50, 50, .2)'
  },
  logoStyle:{
    width: 80,
    height: 80,
  },
}

export default ( StaffCard );
