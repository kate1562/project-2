import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <ul>
      <li>
        <Link to={'/project-2'}>Home</Link>
      </li>
      <li>
        <Link to={'/project-2/cocktailgenerator'}>Random Cocktail Generator</Link>
      </li>
      <li>
        <Link to={'/project-2/allcocktails'}>All Cocktails</Link>
      </li>

    </ul>
  </div>
}