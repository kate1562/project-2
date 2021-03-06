import React from 'react'
import Navbar from './Navbar'

export default function Cocktails({ location }) {
  const randomCocktail = location.state
  const randomCocktailArray = Object.entries(randomCocktail)
  const rawIngredients = randomCocktailArray.splice(21, 15)
  const rawMeasures = randomCocktailArray.splice(21, 15)
  const allIngredients = []
  const allMeasures = []

  function callIngredients() {
    rawIngredients.map((ingredient) => {
      if (ingredient[1] !== null) {
        allIngredients.push(ingredient[1])
      }
    })
  }
  callIngredients()

  function callMeasures() {
    rawMeasures.map((measure) => {
      if (measure[1] !== null) {
        allMeasures.push(measure[1])
      }
    })
  }
  callMeasures()

  return <div>
    <Navbar />
    <div className="box columns is-mobile">
      <div className="column">
        <figure className="image is-square">
          <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        </figure>
      </div>
      <div className="column has-text-centered">
        <h2 className="title">{randomCocktail.strDrink}</h2>
        <h3 className="title is-5">Instructions</h3>
        <p>{randomCocktail.strInstructions}</p>
        <br></br>
        <h3 className="title is-5">Ingredients</h3>
        <p>{allMeasures[0]} {allIngredients[0]} </p>
        <p>{allMeasures[1]} {allIngredients[1]}</p>
        <p>{allMeasures[2]} {allIngredients[2]}</p>
        <p>{allMeasures[3]} {allIngredients[3]}</p>
        <p>{allMeasures[4]} {allIngredients[4]}</p>
        <p>{allMeasures[5]} {allIngredients[5]}</p>
        <p>{allMeasures[6]} {allIngredients[6]}</p>
        <p>{allMeasures[7]} {allIngredients[7]}</p>
        <p>{allMeasures[8]} {allIngredients[8]}</p>
        <p>{allMeasures[9]} {allIngredients[9]}</p>
        <p>{allMeasures[10]} {allIngredients[10]}</p>
        <p>{allMeasures[11]} {allIngredients[11]}</p>
        <p>{allMeasures[12]} {allIngredients[12]}</p>
        <p>{allMeasures[13]} {allIngredients[12]}</p>
        <p>{allMeasures[14]} {allIngredients[14]}</p>
        <p>{allMeasures[15]} {allIngredients[15]}</p>
      </div>
    </div>
  </div>
}
