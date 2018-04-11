import React, { Component } from 'react';
import JL from "../../images/JordanLaursen.png";

const SlideOne = (props) => {

  let background = {
    backgroundImage: 'url(JL)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
