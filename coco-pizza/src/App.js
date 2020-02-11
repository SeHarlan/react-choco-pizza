import React, { Component } from 'react';
import './App.css';
import  Header  from './Header.js'
import  Body  from './Body.js'
import  Footer  from './Footer.js'
import './style.css'

const compLogo = '/lab-assets/logo.png';
const compName = 'Delicious';
const fbIconImg = '/lab-assets/fb-icon.png';
const productName = 'Chocolate Pizza';
const postedDate = 'Dec 15th, 2013';
const productImage = '/lab-assets/choco-pizza.png'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header logo={compLogo} companyName={compName} fbIcon={fbIconImg} />
        <Body productName={productName} postedDate={postedDate} productImage={productImage} />
        <Footer />
      </div>
    );
  }  
}

