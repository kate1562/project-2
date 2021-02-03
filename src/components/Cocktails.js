import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default function Cocktails() {
  const [cocktails, updateCocktails] = useState([])

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then(({ data }) => {
        updateCocktails(data.drinks)
        console.log(data.drinks)
      })
  }, [])

  return <div>
    <h1>Cocktail Name</h1>
  </div>


}



