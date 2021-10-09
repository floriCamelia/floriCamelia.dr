import DeliveryImg from "../../assets/img/delivery1.JPG";
import FloralArrangements from "../../assets/img/aranjamenteFlorale.jpg";
import Bridal from "../../assets/img/wedding.jpg";

const dataServices = {
  heroTitle: 'Servicii Oferite',
  cards: [
    {
      imgSrc: DeliveryImg,
      imgAlt: 'Image ALT',
      title: 'Livrare Flori',
      description: 'Livrăm flori proaspete și parfumate, selectate cu grijă și gust pentru o comandă specială.',
      cta: {
        label: 'Vezi Detalii',
        url: '/servicii/livrare'
      }
    },
    {
      imgSrc: FloralArrangements,
      imgAlt: 'Image ALT',
      title: 'Aranjamente Florale',
      description: 'Aranjamentele cu flori proaspete este cea mai bună alegere pentru evenimentul tău deosebit.',
      cta: {
        label: 'Vezi Detalii',
        url: '/servicii/aranjamente'
      }
    },
    {
      imgSrc: Bridal,
      imgAlt: 'Image ALT',
      title: 'Buchete de Mireasă',
      description: 'Poți fi sigură că buchetul tău de mireasă va arăta exact așa cum îți dorești!',
      cta: {
        label: 'Vezi Detalii',
        url: 'servicii/buchete-de-mireasa'
      }
    }
  ],
  slider: {
    title: 'Câteva testimoniale din partea clienților noștri',
    cards: [
      {
        descriptionOne: 'Sunteți cei care depun suflet în ceea ce faceți ❤ Vă mulțumesc enorm pentru emoții frumoase!!!',
        nameOne: 'Victoria Mihai',
        descriptionTwo: 'Recomand cu încredere. Le mulțumesc frumos pentru buchetul superb făcut și livrat în doar câteva ore. Mama mea a avut parte de cea mai frumoasă surpriză de ziua ei!',
        nameTwo: 'Laura Babin',
      },
      {
        descriptionOne: 'FloriCamelia Drochia ne-a ajutat să trăim emoții minunate. Fiind departe de cei dragi prin intermediul lor am reușit să transmitem dragostea și urările de bine. Sunt foarte disponibili și amabili. Livrarea s-a efectuat rapid și au răspuns la toate exigențele noastre. Nu doar profesioniști în ceea ce fac dar oameni cu suflet mare!!! Florile frumoase dar și presența celor care livrează a transmis caldură și afecțiune. Recomand la toți! În perioada de carantină respectă corect normele de comportament necesare.',
        nameOne: 'Nelea Ambros',
        descriptionTwo: 'Am rămas și rămân mereu plăcut surprinsă de FloriCamelia Drochia!!! Începând de la buchetul meu de mireasa ceva ani în urmă, minunatul buchet de mireasă al cumnatei mele, primele flori de primavară și apoi cele de vară, crescute în Drochia nemijlocit de voi, sunt foarte și foarte mulțumitoare pentru munca sârguincioasă, servicii de calitate, flori care ne bucură ochii nu o singură săptămână cu prospețimea lor!!! Vă mulțumesc din partea la toată familia noastră!!! Sunteti SUPER!!! Succese mari și realizări frumoase în 2019!!!',
        nameTwo: 'Aliona Neagu'
      },
      {
        descriptionOne: 'Sincere felicitări și, mai ales, mulțumiri, pentru activitatea dvs.! Profesionalism, seriozitate, receptivitate și disponibilitate! Recomand cu încredere!',
        nameOne: 'Natalya Coste',
        descriptionTwo: 'Cele mai frumoase și rezistente flori. Mereu când am nevoie, procur de la dumneavoastră, mereu sunt proaspete, în timpul rece trandafirii rezistă chiar și o lună și câteva zile. După părerea mea nu aveți concurență și mereu sunteți la înălțime.',
        nameTwo: 'Anastasia Amaftioaie'
      },
      {
        descriptionOne: 'Всё супер молодцы. Для нас находяших за границей с этой услугой просто класс можем порадовать своих близких и родных ребята просто супер',
        nameOne: 'Алена Дамиан',
        descriptionTwo: 'Добрый день, хочу выразить огромную благодарность за качество и быструю доставку, за предоставленную возможность порадовать своих близких не смотря на расстояние.',
        nameTwo: 'Lidya Savitchii'
      },
      {
        descriptionOne: 'Спасибо большое за предоставленную возможность порадовать близких людей 🌸Так как они находятся на дальнем растоянии ,благодаря вашему магазину у нас есть такая возможность .\n' +
          'Отдельное спасибо Мариану ,за консультацию и доставку .Все быстро ,надежно и со вкусом 👌🏻\n' +
          'Процветания и торговли вам',
        nameOne: 'Инна Гаджиева'
      }
    ]
  }
};

export default dataServices;
