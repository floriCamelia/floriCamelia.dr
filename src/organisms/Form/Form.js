import React from 'react';
import './Form.scss';
// Components
import Subheading from "../../atoms/Subheading/Subheading";
import Image from "../../atoms/Image/Image";
import ShopImg from '../../assets/img/shop.jpg';
import ShopImg2 from '../../assets/img/shop2.jpg';
import ShopImg3 from '../../assets/img/shop3.jpg';
import Grid from "../Grid/Grid";
import Map from "../../atoms/Map/Map";

export default class Form extends React.Component {
  render() {
    const {} = this.props;

    return (
      <div className={`form`}>
        <div className='form__col'>
          <Subheading subheading='Luați legătura cu noi.'/>
          <a className='form__text description__large phone' href='tel:+37367617827'><i className="fas fa-phone-square-alt"></i> +373 676 17 827</a>
          <a className='form__text description__large phone' href='tel:+37367617284'><i className="fas fa-phone-square-alt"></i>+373 676 17 284</a>
          <a className='email' href='mailto:marik1988@gmail.com'><i className="fas fa-envelope"></i>marik1988@gmail.com</a>
        </div>

        <div className='form__col'>
          <h2 className='subheading'><i className="fas fa-clock"></i> Ore de lucru</h2>
          <p>Luni - Joi de la 8:00 - 20:00</p>
          <p>Vineri - Duminică de la 8:00 - 21:00</p>
          <p><i className="fas fa-map-marker-alt"></i> 31 august, Drochia, Moldova</p>
        </div>
        <div className='form__col'>
          <Map />
        </div>
        <Grid isThreeCol='true'>
          <Image imgSrc={ShopImg} modifier='image--contact'/>
          <Image imgSrc={ShopImg2} modifier='image--contact'/>
          <Image imgSrc={ShopImg3} modifier='image--contact'/>
        </Grid>
        <p className='form__footerNote'>Servim cu mândrie clienții din Drochia, precum și din zonele apropiate.</p>
      </div>
    )
  }
}
