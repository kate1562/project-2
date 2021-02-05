import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'

export default function Cocktails() {
  const [cocktails, updateCocktails] = useState([])
  const [allCocktails, updateAllCocktails] = useState([])
  const [loading, updateLoading] = useState(true)
  const [preference, updatePreference] = useState('All')

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then(({ data }) => {
        updateCocktails(data.drinks)
        getCocktail(data.drinks)
      })
  }, [])

  function getCocktail(cocktails) {
    const tempArray = []

    cocktails.forEach(cocktail => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .then(({ data }) => {
          const array = [...tempArray, data.drinks[0]]
          tempArray.push(data.drinks[0])
          updateAllCocktails(array)
        })
    })
    updateLoading(false)
  }

 

  if (allCocktails.length < 100) {
    return <RingLoader loading={loading} size={100} />
    // add in a loader thing
  }

  //button with an onclick which calls a function
  //take the cocktails array and create a random index from length
  //take this index and use it to access a random cocktail in the array  
  //function needs to pass the random cocktaiil to the new linked page (as a prop)
  //we render the prop cocktail in jsx on the randomcocktail page 
  console.log(allCocktails)

  function goToRandom() {
    const generator = Math.floor(Math.random() * 99)
    const yourRandomCocktail = allCocktails[generator]
    return yourRandomCocktail
  }
  // goToRandom()
  function filterCocktails() {
    return allCocktails.filter(cocktail => {
      return (preference === 'All' || cocktail.strIngredient1  === preference || cocktail.strAlcoholic === preference)
    })
  }

  const randomCocktail = goToRandom()
  // console.log(randomCocktail)
  return <div>

    <div>
      <Link
        key="randombutton"
        to={{
          pathname: '/project-2/cocktailgenerator',
          state: randomCocktail 
        }}
      >
        <button disabled = {allCocktails.length < 100} onClick={() => goToRandom()}>Generate a random cocktail</button>
      </Link>
      <select onChange={(event) => updatePreference(event.target.value)}>
        <option>All</option>
        <option>Vodka</option>
        <option>Gin</option>
        <option>Rum</option>
        <option>Sweet Vermouth</option>
        <option>Tequila</option>
        <option>Scotch</option>
        <option>Brandy</option>
        <option>Amaretto</option>
        <option>Non alcoholic</option>
      </select>
    </div>


    return <div className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {filterCocktails().map((cocktail, index) => {
            return <div key={index} className="column is-one-fifth-desktop is-half-tablet is-full-mobile">
              <Link key={cocktail.idDrink} to={{
                pathname: `/project-2/allCocktails/${cocktail.idDrink}`,
                state: { cocktail }
              }}>
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <h2 className="title is-5 is-centered">{cocktail.strDrink}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image is 4by3">
                      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    </figure>
                  </div>
                </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>


}





