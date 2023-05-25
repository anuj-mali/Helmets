import React from 'react';
import car_1 from '../../Assets/Carousel/1.png';
import car_2 from '../../Assets/Carousel/3.jpg';
import car_3 from '../../Assets/Carousel/4.jpg';
import styled from 'styled-components';

const Carousel = () => {

  return (
    <><Wrapper>
    <div
  id="carouselVideoExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
    <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  
  <div class="carousel-inner">
  
    <div class="carousel-item active item">
    <img src={car_1} class="d-block w-100" alt="Agv"/>
     
    </div>

    <div class="carousel-item item">
    <img src={car_2} class="d-block w-100" alt="Agv"/>
    </div>

    <div class="carousel-item item">
    <img src={car_3} class="d-block w-100" alt="Agv"/>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</Wrapper>
    </>
  )
}
const Wrapper =styled.section`
.carousel .item {
    height: 500px;
  }
  
  .item img {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 500px;
  }
`;
export default Carousel