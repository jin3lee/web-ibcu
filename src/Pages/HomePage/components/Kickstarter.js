import React from "react";

class Kickstarter extends React.Component {

  render() {
    return(
      <div style={ style.kickstarterContainer }>
        <div style={ style.kickstarterContentStyle }>
          <div style={ style.kickstarter_project_name_style }>
            plankton
          </div>

          <div style={ style.kickstarter_project_description_common_style}>
            <div style={ style.kickstarter_project_description_style }>
              PLANKTON AUTOMATIC FISH FEEDER IS NOW LIVE ON KICKSTARTER
            </div>

            <div style={ style.kickstarter_project_description_style }>
              PLEDGE FOR YOURS NOW TO GET UP TO 41% OFF{"\n"}
            </div>

            <div style={ style.kickstarter_project_description_style }>
              THE FUTURE RETAIL PRICE
            </div>
          </div>

          <button href="#kickstarter" style={ style.kickstarter_button_style }>
            <b>GO TO KICKSTARTER</b>
          </button>
        </div>
      </div>
    );
  }
}

const style = {
  kickstarterContainer: {
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    height: 642,
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

export default Kickstarter;
