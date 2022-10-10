import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsFood } from "../actions/foodActions";

function FoodScreen(props) {
  const { id } = useParams();
  const foodDetails = useSelector((state) => state.foodDetails);
  const { food, loading, error } = foodDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsFood(id));
    return () => {
      //
    };
  }, []);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/" className="back-to-result-text">
          <i className="fas fa-caret-left"></i>
          Back to result
        </Link>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={food.imgSource} alt="food"></img>
          </div>

          <div className="details-wrap">
            <div className="details-info">
              <ul>
                <li className="details-info-title">
                  <h4>{food.title}</h4>
                </li>

                <li className="details-info-rating">
                  {food.rating}
                  <i className="fas fa-star"></i>
                </li>

                <li className="details-info-price">
                  <h4>
                    Price: <span>${food.price}</span>
                  </h4>
                </li>
              </ul>
            </div>

            <div className="details-action">
              <ul>
                <li className="details-action-price">
                  Price: <span>${food.price}</span>
                </li>
                <li className="details-action-quantity">
                  Quantity:
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </li>
                <li>
                  <button className="btn details-action-add-cart-btn">
                    Add to cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodScreen;
