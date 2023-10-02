import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import "./styles.css"
import SearchResult from './SearchResult';



export const BASE_URL="http://localhost:9000";



const Header = () => {
  
  const [data,setData]=useState(null);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const[filterData,setfilterData]=useState(null);
  const[selectBtn,setselectBtn]=useState("All")
  

  useEffect(()=>{
    const fetchFoodData=async()=>{
      setLoading(true)
       try{
      
       const response=await fetch(BASE_URL);
      const json=await response.json();
      setData(json);
      //console.log(json)
      setfilterData(json);
      setLoading(false)
      }
      catch(error)
      {
       setError("Unable to fetch Data")
      }
     }
   fetchFoodData();
  },[]);
  

  const searchFood=(event)=>{
    const searchVal=event.target.value;
    //console.log(searchVal);
    
    if(searchVal==""){
      setfilterData(null);
    }
    const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchVal.toLowerCase()))  //search functionality
    setfilterData(filter);

  }
   
  const filterFood=(type)=>{
    if(type=="All")
    setfilterData(data);
     setselectBtn("All");   
  
  const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase())) ;
  setfilterData(filter);
  setselectBtn(type);
  }



  
if(error) return <div>{error}</div>
if(loading) return <div>loading...</div>





  return (
    <div className='navbar'>
    <mainContainer>
    <topContainer>
     <div className='logo'>
        <img src="Foody_Zone.png"></img>
         </div>

         <div className='search'>
            <input onChange={searchFood} placeholder='Search Food...'></input>
         </div>
    </topContainer>
    <filterContainer>
    <button >All</button>
    <button>Breakfast</button>
    <button>Lunch</button>
    <button>Dinner</button>
    </filterContainer>
    <SearchResult data={filterData}/>
    </mainContainer>
    </div>
  )
}

export default Header;

const foodCardsContainer=styled.section`

`;