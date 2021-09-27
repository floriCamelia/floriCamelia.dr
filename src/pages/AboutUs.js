import React from 'react';
// Components
import Hero from "../organisms/Hero/Hero";
import Colorblock from "../organisms/Colorblock/Colorblock";
// Data
import HeroImg from '../assets/img/aboutHero.jpg'
import BlockImage from '../assets/img/aboutCEO.jpg'

export default class AboutUs extends React.Component {
  render() {
    const {intro, description} = this.props;

    return (
      <section className='about-us-page'>
        <Hero imgSrc={HeroImg} isNarrow='true' title="Despre Noi"/>
        <Colorblock intro={intro} description={description} imgSrc={BlockImage}/>
      </section>
    )
  }
}

AboutUs.defaultProps = {
  intro: 'Ce știm să facem? Să oferim oamenilor flori, culori, dragoste și bucurie...',
  description: [
    'Suntem Flori Camelia, un magazin local de flori din Drochia care vă servește cu entuziasm. Sunteți binevenit(ă) să vizitați magazinul nostru, unde veți găsi o selecție largă de flori proaspăt tăiate, plante în ghivece și mici cadouri pentru a însoți florile alese.',
    'Oferim aranjamente originale, potrivite pentru orice ocazie și eveniment. Echipa noastră de designeri cu înaltă calificare va fi încântată să creeze un design personalizat pentru dvs.',
    'Menținem o reputație în comunitatea noastră pentru a fi cea mai bună alegere pentru toate nevoile tale florale. Florarii noștri profesioniști se mândresc cu capacitatea lor de a găsi florile potrivite care se potrivesc stilului, gustului și bugetului dvs. unic.',
    'Cu ajutorul nostru, vă puteți completa nunta sau puteți oferi un cadou persoanei speciale. Arta noastră florală este perfectă pentru orice ocazie, oricât de mare sau de mică ar fi.',
    'Furnizorii de aproape și de departe ne permit să oferim produse de cea mai înaltă calitate clienților noștri. Cu contribuțiile lor, avem capacitatea de a vă oferi aranjamente florale uimitoare. Putem livra flori într-o mare varietate de locații și afaceri, permițându-vă să planificați un cadou surpriză din timp.',
    'Cu atâtea opțiuni disponibile pentru florării, este logic să comandați de la un magazin de flori local ca al nostru. Serviciile noastre și aranjamentele florale sunt de neegalat. Mergem dincolo de a depăși așteptările dvs. și ne asigurăm că comanda dvs. este livrată la timp. Personalul nostru este dedicat satisfacției dvs. depline, așa că ne străduim să vă îndeplinim solicitarea corect de la prima comandă. Puteți conta pe noi pentru toate nevoile dvs. de flori.',
    'Vă așteptăm cu mult drag!',
    ' Marian & Lilia'
  ]
};
