import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//css
import "./searchComponent.css";

//get the store value and also dispatch it if required
import { useSelector, useDispatch } from "react-redux";
//import the category and run on useEffect
import {
  fetchSearchItem,
  cleanUpItems,
} from "../../features/mealDB/mealDBSlice";

let SearchComponent = () => {
  //let ref
  let inputRef = useRef();
  //initialState
  let [search, setSearch] = useState("");
  //dispatch, state value
  let dispatch = useDispatch();
  let searchItem = useSelector((state) => state.meal.searchItem);

  // //useEffect
  useEffect(() => {
    inputRef.current.focus();
    dispatch(cleanUpItems());
  }, [dispatch]);

  //handleSubmit
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!search || search === null) {
      alert("Input is required");
      return;
    }
    console.log(search);
    setSearch("");
    dispatch(fetchSearchItem(search));
  };

  return (
    <>
      <h3>SearchComponent</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          placeholder="search your fav recipes... eg:apple"
        />
        <button type="submit">search</button>
      </form>
      <br />
      <br />
      <div className="searchItems">
        {searchItem ? (
          searchItem.map((item) => (
            <div key={item.idMeal}>
              <div className="searchItem-cover">
                <img src={item.strMealThumb} alt={item.idCategory} />
                <div>
                  <h3>{item.strMeal}</h3>
                  <p>{item.strInstructions}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <ul>
              <li>Search for a keyword (i.e Chicken, Pizza, ...)</li>
              <li>
                Our Look our <Link to="/">categoryPage</Link> and search by it's
                name
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
