import React from 'react';
import car_1 from '../../Assets/Carousel/1.png';
import car_2 from '../../Assets/Carousel/2.mp4';
//import car_3 from '../../Assets/Carousel/3.png';

const Home = () => {
  return (
    <>
  
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
  
    <div class="carousel-item active">
      <video class="img-fluid" autoplay loop muted>
        <source src={car_2} type="video/mp4" />
      </video>
      
    </div>

    <div class="carousel-item">
      <video class="img-fluid" autoplay loop muted>
        <source src="../../Assets/Carousel/2.mp4" type="video/mp4" />
      </video>
      </div>

    <div class="carousel-item">
    <img src={car_1} class="d-block w-100" alt="Agv"/>
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
    </>
  )
}

export default Home