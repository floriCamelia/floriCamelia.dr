import React from 'react';
import './CardSlider.scss';
import Slider from "react-slick";

// Components
import Subheading from "../../atoms/Subheading/Subheading";

export default class CardSlider extends React.Component {
  render() {
    const {sliders, title} = this.props;
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 15000
    };

    return (
      <div className={`card-slider`}>
        <Subheading subheading={title}/>
        <Slider {...settings}>
          {sliders && sliders.map((item, index) => (
            <div className='card-slider__card' key={index}>
              <div className='card-slider__wrapper'>
                <div className='card-slider__text'>
                  <i className="icon fas fa-quote-left"></i>
                  <p>{item.descriptionOne}</p>
                  <p>{item.nameOne}</p>
                </div>
                {item.descriptionTwo && <div className='card-slider__text'>
                  <i className="icon fas fa-quote-left"></i>
                  <p>{item.descriptionTwo}</p>
                  <p>{item.nameTwo}</p>
                </div>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
