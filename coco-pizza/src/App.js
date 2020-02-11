import React, { Component } from 'react';
import './App.css';
import  Header  from './Header.js'
import  Body  from './Body.js'
import  Footer  from './Footer.js'
import './style.css'

const compLogo = '/lab-assets/logo.png';
const compName = 'Delicious';
const productName = 'Chocolate Pizza';
const postedDate = 'Dec 15th, 2013';
const productImage = '/lab-assets/choco-pizza.png'

const fbIcon = '/lab-assets/fb-icon.png';
const flicIcon = './lab-assets/flic-icon.png';
const gpIcon = './lab-assets/gp-icon.png';
const instIcon = './lab-assets/insta-icon.png'
const pintIcon = './lab-assets/pint-icon.png';
const rssIcon = './lab-assets/rss-icon.png';
const twitIcon = './lab-assets/twit-icon.png'
const iconArray = [fbIcon, flicIcon, gpIcon, instIcon, pintIcon, rssIcon, twitIcon];

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header logo={compLogo} companyName={compName} iconArray={iconArray} />
        <Body productName={productName} postedDate={postedDate} productImage={productImage} />
        <Footer />
      </div>
    );
  }  
}

