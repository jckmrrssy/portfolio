import React, { Component } from 'react';
import Slide from "../Slide/Slide";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";

export default class SkillSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        '../../images/htmlLogo.png',
        '../../images/cssLogo.png',
        '../../images/JS6.png',
        '../../images/ReactJSLogo.png',
        '../../images/nodeLogo.png',
        '../../images/npmLogo.png',
        '../../images/mongoDBLogo.jpg',
        '../../images/mongooseLogo.png',
        '../../images/mySQLLogo.jpg',
        '../../images/sequelizeLogo.png',
        '../../images/expressJSLogo.png',
        '../../images/bootstrapLogo.jpg',
        '../../images/materializeLogo.png',
        '../../images/jQuery_Logo.png',
        '../../images/ajaxLogo.svg',
        '../../images/gitLogo.svg',
        '../../images/herokuLogo.png',
        '../../images/VSCodeLogo.png'
      ],
      currentIndex: 0,
      translateVal: 0
    }
  };

  goToPrevious = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1,
      translateVal: prevState.translateVal + this.slideWidth()
    }))
  };

  goToNext = () => {
    
    if(this.state.currentIndex === this.state.images.length -1) {
      return this.setState({
        currentIndex: 0,
        translateVal: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateVal: prevState.translateVal + -(this.slideWidth())
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  };
  
  
  render() {
    return (
      <div className="slider">
        
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateVal}px)`,
            transition: 'trasnform ease-out 0.45s',
            height: "100%",
            width: "100%",
            position: "relative"
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow 
          goToPrevious={this.goToPrevious} 
        />
        <RightArrow 
          goToNext={this.goToNext}
        />
        
      </div>
    )
  }
}
