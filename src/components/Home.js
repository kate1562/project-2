import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return <main className="hero is-danger is-fullheight">
    <div className="container has-text-centered">
      <section className="hero-body">
        <div className="">
          <h1 className="title">InsBARation</h1>
          <p className="subtitle">Your route to a great evening</p>
          <Link
            to={{
              pathname: '/project-2/allCocktails/'
            }} >
            <button className="button is-rounded">All cockails</button>
          </Link>
        </div>
      </section>
    </div>
  </main>
}

