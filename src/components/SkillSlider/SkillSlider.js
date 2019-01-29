import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SkillSlider.css"

export default class SkillSlider extends Component {
  render() {
    return (
      <div>
        <Carousel width="200px" autoPlay infiniteLoop selectedItem={4} dynamicHeight>
                                <div>
                                    <img alt="htmlLogo" src="../../images/htmlLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="cssLogo" src="../../images/cssLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="JS6Logo" src="../../images/JS6.png" />

                                    </div>
                                    <div>
                                    <img alt="reactLogo" src="../../images/ReactJSLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="nodeLogo" src="../../images/nodeLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="npmLogo" src="../../images/npmLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="mongoDBLogo" src="../../images/mongoDBLogo.jpg" />

                                    </div>
                                    <div>
                                    <img alt ="mongooseLogo" src="../../images/mongooseLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="sqlLogo" src="../../images/mySQLLogo.jpg" />

                                    </div>
                                    <div>
                                    <img alt="sequelizeLogo" src="../../images/sequelizeLogo.png" />

                                    </div>
                                    <div>
                                    <img alt="expressJSLogo" src="../../images/expressJSLogo.png" />

                                    </div>


                                </Carousel>
                                
      </div>
    )
  }
}
