import React from "react";

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>about</h1>
      
      <p>🍹Select a tasty drink to enjoy responsibly from the wide variety of cocktail recipes available! ☺ </p>
      <p>🍹Buscador de Cocktails con recetas!  Venga, elige el que más te guste y bebe con moderación!! ☺ </p>

      <p> This  project consumes data from CocktailDB API and was bootstrapped with Create React App. </p>

      <article class="about-btn-container">
        <a target="_blank" rel="noopener noreferrer" href="https://www.thecocktaildb.com/api.php" 
        class="btn-primary">CocktailDB API</a>
      </article>
    </section>
  );
};

export default About;