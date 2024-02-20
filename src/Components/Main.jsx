import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'





export const Main=()=>{
    const[url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
    const [item,setItem]=useState();
    const [search,setSearch]=useState("");
    useEffect(()=>{
      const fetch=async()=>{
        const res=await axios.get(url)
        setItem(res.data.data.results);
      }
      fetch();
    },[url])
    
    const searchMarvel=()=>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }


    return(
        <>
        <div className='header'>
        <div className='bg'>
<img src='./images/cover.png.jpg'></img>
</div>

        </div>
        <div>
          <center> <h1 style={{color:"white",marginTop:"30px"}}>Marvel Comic Rare Characters </h1></center>
        </div>
        <div className='content'>
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
         
        </div>
        
        
        </>
    )
}