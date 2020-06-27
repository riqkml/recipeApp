import React from "react";
import style from "./recipemodule.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>Calories = {calories}</p>
      <ol>
        {ingredients.map((bahan) => (
          <li>{bahan.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
