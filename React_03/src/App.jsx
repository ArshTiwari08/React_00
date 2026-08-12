import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'
/* eslint-disable @next/next/no-img-element */

function Card2() {
  return (
    <>
      <h2 style={{ backgroundColor: "green",color :"pink",}}>
      Simple working of the Props
      </h2>
      <div style={{display :"flex",gap :"10px",height :"300px"}}>
        <Card name = "mohti"/>
        <Card name ="Ankush"/>
        <Card name='mahesh'/>
      </div>
      
    </>
  );
}

export default Card2

