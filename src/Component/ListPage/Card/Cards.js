import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

import axios from "axios";

function Cards(){

        
    const[pgdata,setPgData]=useState([]);
    const location=useLocation();
    console.log(location)
    const [destination,setDestination]=useState(location.state.searchPg )
    console.log(destination);
    console.log(location);
    useEffect(()=>{
        apiData();
        },[])
        
    const apiData =()=>{
        axios.get(`http://localhost:1234/pg?location=${destination}`).then(res=>{
      setPgData(res.data);
      console.log(pgdata);
      }).catch(error=>{
        console.log(error);
      })
    }
    return(
        <>
            {pgdata.map((pgdata)=>{
                return <Card   title={pgdata.title}
                    location={pgdata.location}
                    price={pgdata.price}
                    Amenities={pgdata.Amenities}
                    img={pgdata.cover_img}
                    key1={pgdata._id}
                    key={pgdata._id}
                />
            })}
           
        </>
    )
}

export default Cards;