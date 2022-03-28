import React, { useEffect } from "react";
import "./categoryComponent.scss";
import { Link } from "react-router-dom";

//get the store value and also dispatch it if required
import { useSelector, useDispatch } from "react-redux";
//import the category and run on useEffect
import {
  fetchCategories,
  cleanUpItems,
} from "../../../features/mealDB/mealDBSlice";

export let CategoryComponent = () => {
  let dispatch = useDispatch();
  let category = useSelector((state) => state.meal.mealItem);
  console.log(category);

  //effect
  useEffect(() => {
    dispatch(fetchCategories());
    return () => {
      dispatch(cleanUpItems());
    };
  }, [dispatch]);
  //loop and paint the DOM
  return (
    <>
      <h3>Category Page</h3>
      <div className="categories">
        {category.map((item) => (
          <div key={item.idCategory}>
            <Link to={`meal/${item.strCategory}`}>
              <div className="category-cover">
                <img src={item.strCategoryThumb} alt={item.idCategory} />
                <div>
                  <h3>{item.strCategory}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
