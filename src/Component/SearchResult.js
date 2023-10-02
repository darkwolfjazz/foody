import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from './Header'

const SearchResult = ({data}) => {
   
   // console.log("rahul:", data?.map((food, index) => console.log(`Food - ${index}`, food.text)))
  
    return (
      
        <foodcardsContainer>
       <foodCards>
        {data?.map((food)=>{
           return <FoodCard key={food.name}>
            <div className='food_img'>
                <img src={BASE_URL + food.image}></img>
            </div>
            <div className='food_info'>
              <div className='food'>
              <h3>{food.name}</h3>
              <p>{food.text}</p>
              </div>
              <button>{food.price}</button>
            </div>
           </FoodCard>
        
        })
        
        }
       </foodCards>
    </foodcardsContainer>

  )
}

export default SearchResult;

const FoodCard=styled.div`
border-radius: 19.447px;
border: 0.659px solid #98F9FF;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

`
const foodcardsContainer=styled.div`

display: flex;
flex-wrap: wrap;

`