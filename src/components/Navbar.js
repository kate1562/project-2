import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar is-light">
    <div className="navbar-start">
      <div className="navbar-brand">
        <a role="button" className="navbar-item">
          <Link to={'/project-2'}>Home</Link>
        </a>
        <a className="navbar-item">
          <Link to={'/project-2/allcocktails'}>All Cocktails</Link>
        </a>
      </div>
    </div>
  </div >
}