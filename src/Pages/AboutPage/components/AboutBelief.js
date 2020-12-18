import React from "react";

import { connect } from 'react-redux';
import { updatePage } from '../../../Container/actions.js';


const CONTENT_ID_PASSION = "CONTENT_ID_PASSION";

class AboutProcess extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      currentContentById: CONTENT_ID_PASSION,
    }
    this._updatePageTo = this._updatePageTo.bind(this);
  }

  _updatePageTo( pageId ) {
    this.props.dispatch( updatePage( pageId ) );
  }

  render() {
    return(
      <div style={ style.container }>
        <div style={{
          marginLeft: '5%', marginRight: '5%',
          display: 'flex', flexDirection: 'column',
        }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Our Belief</h2>
          <div style={{
            fontFamily: 'Avenir',
            fontSize: '1.4em',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4%',
            textAlign: 'center',
            flexDirection: 'column'
          }}>
            <div>
              We are an interdenominational college designed to train men and women who desire to expand the Kingdom of God globally. 
              There are pastors and mentors from many and various churches and different denominational affiliations and traditions. 
              However, there are some vital common doctrines uniting us.
            </div>

            <div style={{ height: 40 }}/>

            <div style={{ fontWeight: 700, margin: 10, fontFamily: 'roboto' }}>
              We Believe...
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              { this._generateBulletPointAndText("There is only one true God who is the eternal King, Creator and Redeemer of all that is. He is perfectly holy, just, loving and truthful. He has revealed Himself to be eternally self-existent – one being in three persons: God the Father, God the Son, who is Jesus the Christ, and God the Holy Spirit.") }
              { this._generateBulletPointAndText("The Bible is the inspired and only infallible and authoritative Word of God.") }
              { this._generateBulletPointAndText("Humankind was created in the image of God to know and enjoy Him, yet we willfully rejected the Lordship and glory of God for which we were intended. Because of this, sickness, death, and judgment entered the world and now creation experiences the effects and consequences of sin.") }
              { this._generateBulletPointAndText("The Lord Jesus Christ, the one and only Son of God, was born of the virgin Mary, who was conceived by the Holy Spirit, and is God's Anointed One, empowered by the Holy Spirit to inaugurate God's Kingdom on earth. He was crucified for our sins, died, was buried, resurrected and ascended into heaven, and is now alive today in the presence of God the Father and in His people. He is \"truly God\" and \"truly man.\"") }
              { this._generateBulletPointAndText("The victorious redemptive work of Christ on the cross provides freedom from the power of the enemy: sin, lies, sickness and torment.") }
              { this._generateBulletPointAndText("We are saved by God's grace, through faith, in the person and work of Jesus Christ. Anyone can be restored to fellowship with God through repenting, believing and receiving Jesus as their Savior and Lord. The Holy Spirit convicts, regenerates, justifies, and adopts us as we enter the Kingdom of God as His sons and daughters.") }
              { this._generateBulletPointAndText("In the sanctifying power of the Holy Spirit who dwells within us, we are enabled to live holy and minister super-naturally. The baptism of the Holy Spirit, according to Acts 1:4-8 and 2:4, is poured out on believers that they might have power to be witnesses.") }
              { this._generateBulletPointAndText("The Church consists of all who put their faith in Jesus Christ, and are born again. Jesus gave His church the ordinances of Baptism and Communion. The Church exists to expand the Kingdom of Jesus Christ; to undo the works of the enemy; to equip saints for ministry; to preach and witness the good news of God's love; to disciple the nations, baptizing and teaching them to love and obey God.") }
              { this._generateBulletPointAndText("The Church eagerly waits for the glorious and visible return of our Lord Jesus Christ. Heaven and hell are real places. There will be a resurrection of the saved and the lost – one to everlasting life and the other to everlasting judgement.") }
            </div>
          </div>
        </div>
      </div>
    );
  }

  _generateBulletPointAndText = ( text ) => {
    return(
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', fontSize: 35 }}>•</div>
        <div style={{ marginRight: 20 }}/>
        <div style={{ textAlign: 'left', marginTop: 7, fontSize: 18, fontFamily: 'roboto'}}>{ text }</div>
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
    flexWrap: 'wrap',
    color: 'black',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    rootContainer: state.rootContainer,
  };
};

export default connect( mapStateToProps )( AboutProcess );
