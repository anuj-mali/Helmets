import React from 'react';
//import image from '../../Assets/Products/agv/k6.jpg';
//import ProductCard from '../../Components/ProductCard/ProductCard';
import { useProductContext } from '../../Context/ProductContext';
import styled from 'styled-components';
import Filters from '../../Components/Filters/Filters';
import Product_card from '../../Components/Product_card/Product_card';
import { useFilterContext } from '../../Context/FilterContext';
const Shop = () => {
  const {filtered_products} =useFilterContext();
  console.log(filtered_products);
  return (
    <>
    <Wrapper className='section'>
      <div className="container">
        <div className="grid grid-two-column">
          <div>
          <Filters/>
          </div>
          <div className="grid grid-four-column">
                    {
                        filtered_products.map((current)=>{
                            return <Product_card key={current.id} {...current}/>
                        })
                
                    }
            </div>
          
          </div>
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    width: 80%;

  }
  .grid {
    display: grid;

  }
  .grid-two-column {
    grid-template-columns: 0.3fr 1fr;
    gap: 2rem;

  }

  .grid-four-column {
    
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }


  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 10rem;
      transition: all 0.2s linear;
    }
            
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.4rem 1.2rem;
      font-size: 1rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    
    width: 100%;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-size: 1.4rem;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;


export default Shop