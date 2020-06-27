import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "56cb659b";
  const APP_KEY = "dc8e58f870492da7551b7cfbd1575070";
  const [recipes, setRecipes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    console.log("use effect running ");
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          value={search}
          onChange={updateSearch}
          type="text"
        />
        <button className="search-button" type="Submit">
          Search
        </button>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </form>
    </div>
  );
};
export default App;
