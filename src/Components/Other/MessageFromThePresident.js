import React from "react";

import presidentImage from './../../assets/staff/staff_r_kong.png';

export default class MessageFromThePresident extends React.Component {
    render() {
        return(
            <div style={{ width: 550, marginLeft: '5%' }}>
                <div style={{ marginRight: '10%', marginTop: 30, fontWeight: 'bold' }}>
                    Message from the President
                </div>
                <div style={{ width: '80%' }}>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, display:'flex', justifyContent: 'center-left', alignItems: 'center' }}>
                        <img alt="presidentFace" src={ presidentImage } style={{ width: 404/2.5, height: 433/2.5 }} />
                    </div>
                    <div style={{ flex: 1 }}>
            
                        <div>Dear Students who want to pursue truth and excellence:</div>
                        <br />

                        There are so many universities and colleges all around the globe. However, this Washington International Mission University has been established to be the beacon of truth for this dark world.
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
                    Washington International Mission University (WIMU) has great plans with a solid educational ideology to suit your needs for a firm faith so that we may be the stepping stone to your promising time and eternity.
                    <br />
                    <br />
                    We have a vision based on the Word of God: “Your beginning will seem humble, so prosperous will your future be.” (Job 8:7)
                    <br />
                    <br />
                    If you are willing to set out to invest your valuable time, talent, and treasure at our University, we would partner with you to be the bearers of the Light and Truth of the World.
                    <br />
                    <br />
                    May we challenge you with an invitation from God’s promise for better scholarship and more mature faith in the Lord? 
                    <br />
                    <br />
                    Dr. Richard H. Kong
                    <br />
                    President
                </div>
            </div>
        );
    }
}