import React from 'react'
const img2 = require('./img2.JPG')
const img = require('./img.JPG')
const img3 = require('./img3.JPG')
const img1 = require('./img1.jpg')
const img4 = require('./img4.jpg')
const img5 = require('./img5.JPG')
const img6 = require('./img6.JPG')
const img7 = require('./img7.JPG')


export default function Carousel() {
  return <>
  <div class="col">
  <div class="row-sm-4">
    <img src={img} height="350" width= "400"/>
    <img src={img1} height="350" width= "400"/>
    <img src={img2} height="350" width= "400"/>
    <img src={img3} height="350" width= "400"/>
    <img src={img4} height="350" width= "400"/>
    <img src={img5} height="350" width= "400"/>
    <img src={img6} height="350" width= "400"/>
    <img src={img7} height="350" width= "400"/>
</div>
</div>
</>
}

