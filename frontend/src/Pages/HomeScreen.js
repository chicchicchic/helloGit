import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen(props) {
  return (
    <div>
      <h3 className="sub-heading">our dishes</h3>
      <h1 className="heading">popular dishes</h1>

      <ul className="dishes-container">
        {data.foods.map((food) => (
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

            <a href="#" className="btn">
              add to cart
            </a>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default HomeScreen;
