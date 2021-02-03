// ? Libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// ? Components
import Navbar from './components/Navbar'
// ? Routes
import RandomCocktail from './components/RandomCocktail'
import Cocktails from './components/Cocktails'
import Cocktail from './components/Cocktail'
// ? Styles
// import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      <Route exact path="/project-2/cocktailgenerator" component={RandomCocktail}/>
      <Route exact path="/project-2/allcocktails" component={Cocktails}/>
      <Route exact path="/project-2/cocktailId" component={Cocktail}/>
    </Switch>
  </BrowserRouter>
}
  
const Home = () => {
  return <h1>Hello world</h1>
}

export default App