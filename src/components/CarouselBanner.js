import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import caro1 from "../assets/img/1.JPG";
import caro2 from "../assets/img/2.JPG";


class CarouselBanner extends Component{
    render(){
        return(
<Carousel>
  <Carousel.Item>
    <img  alt="900x500" src={caro1} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  alt="900x500" src={caro2} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="900x500" src={caro1} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );
    }
}
export default CarouselBanner;