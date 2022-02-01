import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';


function Properties() {
  return (
  <div className='product'>
      <div className='p-heading'>
          <h3>Properties</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
 
      </div>
      <div className='product-container'>
        <Bproperty image={pimage1} name="Al-Musalla" price="$240,599"/>
        <Bproperty image={pimage2} name="Al-Hafzes" price="$396,789"/>
        <Bproperty image={pimage3} name="Al-Buhara" price="$196,289"/>

      </div>
  </div>
  ) 
}

export default Properties;
