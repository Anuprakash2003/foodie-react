import React,{useEffect,useState} from 'react';
import Card from './Card';
import  Header from '../components/Header';
import {RestaurantService} from '../services/RestaurantService'


const RestaurantPage = ()  =>{
    const [restaurantData,setRestaurantData]=useState([]);
      useEffect(()=>{
        const fetchRestaurantData= async () =>{
            const response =await RestaurantService.getRestaurantData();
           setRestaurantData(response);
            console.log(response,"inside use Effect")
        }
        fetchRestaurantData();
      },[])
    

    return(
        <div>
             <div className="restaurant-wrapper">
            <Header/>
            <div className="cards">
            {
                restaurantData.map((restData)=>{
                return(<Card key={restData.id}
                    img={restData.thumbnail_image}
                    name = {restData.name}
                    description={restData.cuisines}
                    location={restData.rating}
                    review={restData.reviews}
                restaurnt={restData}
                />)
                  }  )
            }
           </div>
        </div>
        </div>
       
    )
} 
export default RestaurantPage;