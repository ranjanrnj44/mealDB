import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

//get the store value and also dispatch it if required
import { useSelector, useDispatch } from "react-redux";
//import the category and run on useEffect
import { fetchSearchItem } from "../../features/mealDB/mealDBSlice";

let CategorySingleProduct = () => {
  //params, history
  let { name } = useParams();
  let history = useHistory();
  //dispatch, state value
  let dispatch = useDispatch();
  let searchItem = useSelector((state) => state.meal.searchItem);

  // //useEffect
  useEffect(() => {
    dispatch(fetchSearchItem(name));
  }, [dispatch, name]);

  return (
    <>
      <h2>Available Recipes : </h2>
      <div className="searchItems">
        {searchItem ? (
          searchItem.map((item) => (
            <div key={item.idMeal}>
              <div className="searchItem-cover">
                <img src={item.strMealThumb} alt={item.idCategory} />
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2>Apologies for this inconvenience</h2>
            <h2>We are preparing your food, you will get in next 1 hour</h2>
            <button type="button" onClick={() => history.push("/")}>
              back to HOME
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CategorySingleProduct;
