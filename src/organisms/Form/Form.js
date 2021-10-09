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
    const {data, dataContact} = this.props;

    return (
      <div className={`form`}>
        <div className='form__col'>
          <Subheading subheading={data.subheading}/>
          <a className='form__text description__large phone' href={dataContact.phone1.action}><i className="fas fa-phone-square-alt"></i>{dataContact.phone1.label}</a>
          <a className='form__text description__large phone' href={dataContact.phone2.action}><i className="fas fa-phone-square-alt"></i>{dataContact.phone2.label}</a>
          <a className='email' href={`${dataContact.email.action}?subject=Email de pe website`}><i className="fas fa-envelope"></i>{dataContact.email.label}</a>
        </div>

        <div className='form__col'>
          <h2 className='subheading'><i className="fas fa-clock"></i> {data.workingHoursTitle}</h2>
          <p>{data.time1}</p>
          <p>{data.time2}</p>
          <p><i className="fas fa-map-marker-alt"></i> {dataContact.address}</p>
        </div>
        <div className='form__col'>
          <Map />
        </div>
        <Grid isThreeCol='true'>
          <Image imgSrc={ShopImg} modifier='image--contact'/>
          <Image imgSrc={ShopImg2} modifier='image--contact'/>
          <Image imgSrc={ShopImg3} modifier='image--contact'/>
        </Grid>
        <p className='form__footerNote'>{data.footnote}</p>
      </div>
    )
  }
}
