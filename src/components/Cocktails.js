import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Cocktails() {
  const [cocktails, updateCocktails] = useState([])
  const [id, updateId] = useState()
  const [allCocktails, updateAllCocktails] = useState([])
  
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then(({ data }) => {
        updateCocktails(data.drinks)
        // console.log(data.drinks)
        getCocktail(data.drinks)
      })
  }, [])

  function getCocktail(cocktails) {
    const tempArray = []
    
    cocktails.forEach(cocktail => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .then(({ data }) => {
          const array = [...tempArray, data.drinks[0]]
          // console.log(data.drinks)
          tempArray.push(data.drinks[0])
          updateAllCocktails(array)
        })
    })
    updateLoading(false)
  }
  
  if (loading) {
    return <h1>hello</h1>
    // add in a loader thing
  }

  return <div>
    {allCocktails.map((cocktail, index) => {

      return <div key={index}>
        <Link
          key={cocktail.idDrink}
          to={{
            pathname: `/project-2/allCocktails/${cocktail.idDrink}`,
            state: { cocktail }
          }}
        >
          <div>
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
        </Link>
      </div>
    })}

  </div>
}



