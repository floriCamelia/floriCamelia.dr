import React from 'react';
import './scroll-btn.scss';

export default class ScrollBtn extends React.Component {

  handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  render() {
    window.onscroll = function(){
      let top =	 window.pageYOffset || document.documentElement.scrollTop;
      let btn = document.querySelector('.scroll-btn')
      if (top > 999) {
        btn.classList.add('isVisible')
        console.log(top)
      } else {
        btn.classList.remove('isVisible')
        console.log(top)
      }
    };
    return (
      <button className='scroll-btn' onClick={this.handleScrollTop}><i className="fas fa-arrow-up"></i></button>
    )
  }
}
