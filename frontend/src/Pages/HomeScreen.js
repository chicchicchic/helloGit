import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from 'axios';

function HomeScreen(props) {
  
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/foods");
      setFoods(data);
    }
    fetchData();
  
    return () => {
      //
    }
  }, [])
  


  return (
    <div>
      <h3 className="sub-heading">our dishes</h3>
      <h1 className="heading">popular dishes</h1>

      <ul className="dishes-container">
        {foods.map((food) => (
          <li key={food._id} className="box">
            <Link to={"/food/" + food._id} className="box-title">
              <img className="box-img" src={food.imgSource} alt="product img" />
            </Link>

            <Link to={"/food/" + food._id} className="box-title">
              {food.title}
            </Link>

            <div className="stars">
              {food.rating}
              <i className="fas fa-star"></i>
            </div>

            <span className="box-price">${food.price}</span>

            <Link to={"/food/" + food._id} className="btn">
              Detail
            </Link>
    
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default HomeScreen;
