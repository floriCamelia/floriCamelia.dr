import React from 'react';
import './Article.scss'
// Components
import Heading from "../../atoms/Heading/Heading";
import CtaInline from "../../atoms/CtaInline/CtaInline";

export default class Article extends React.Component {
  render() {
    const {title, description, footerNotes} = this.props;

    return (
      <section className='article'>
        <CtaInline label='Înapoi' iconClass='fas fa-long-arrow-alt-left'/>
        <Heading title={title} />
        {description && description.map((line, index) => (
          <p key={index} className='article__description'>{line}</p>
        ))}
        <div dangerouslySetInnerHTML={{__html: `${footerNotes}`}}></div>
      </section>
    )
  }
}
