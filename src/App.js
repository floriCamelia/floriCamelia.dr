import React from "react";
import {HashRouter, Route} from "react-router-dom";
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import UtilityNav from "./organisms/UtilityNav/UtilityNav";
import Header from "./organisms/Header/Header";
import Footer from "./organisms/Footer/Footer";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ArticleDelivery from "./pages/ArticleDelivery";
import ArticleArrangements from "./pages/ArticleArrangements";
import ArticleBridal from "./pages/ArticleBridal";

// Data Romanian
import dataHeader from "./data/romanian/global/data-header";
import dataUtility from "./data/romanian/global/data-utility";
import dataFooter from "./data/romanian/global/data-footer";
import dataServices from './data/romanian/data-services';
// Images
import dataHomePage from "./data/romanian/data-homepage";

export default class App extends React.Component {

  render() {
    return (
      <HashRouter basename="/page">
          <UtilityNav/>
          <Header data={dataHeader}/>
          <Route exact path='/' render={ () => <HomePage data={dataHomePage}/> }/>
          <Route exact path='/servicii' render={ () => <Services data={dataServices}/> } />
          <Route exact path='/servicii/livrare' component={ArticleDelivery}/>
          <Route exact path='/servicii/aranjamente' component={ArticleArrangements}/>
          <Route exact path='/servicii/buchete-de-mireasa' component={ArticleBridal}/>
          <Route exact path='/contact' component={ContactUs}/>
          <Route exact path='/despre-noi' component={AboutUs}/>
          <Footer data={dataFooter}/>
      </HashRouter>
    );
  }
}
