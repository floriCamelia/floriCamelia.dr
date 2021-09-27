import React from "react";
import {HashRouter, Route} from "react-router-dom";
import './App.scss';
import './index.css';
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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HashRouter basename="/page">
        <UtilityNav />
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/servicii' component={Services}/>
        <Route exact path='/servicii/livrare' component={ArticleDelivery}/>
        <Route exact path='/servicii/aranjamente' component={ArticleArrangements}/>
        <Route exact path='/servicii/buchete-de-mireasa' component={ArticleBridal}/>
        <Route exact path='/contact' component={ContactUs}/>
        <Route exact path='/despre-noi' component={AboutUs}/>
        <Footer/>
      </HashRouter>
    );
  }
}
