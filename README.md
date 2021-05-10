# InsBaration: cocktail collection
## Overview
InsBARation was the second project completed as part of the GA Software Engineering Immersive course and my first application built with React. We had 48 hours to pair program using a liveshare code editing extension and the driver/navigator technique to take turns in each role. The program allows users to browse 100 cocktail recipes by base alcohol, or if they can't decide, gives them a random cocktail to try. We used the cocktailsDB API to seed our data and deployed on GitHub pages. 

🔗 https://kate1562.github.io/project-2/ 

## Technologies used
* React.js
* JavaScript (ES6)
* HTML5
* Axios
* Insomnia REST Client
* Balsamiq
* Npm
* Bulma CSS Framework
*  Cocktaildb API

## User Journey 
### Homepage 
![Screenshot 2021-04-06 at 16 37 16](https://user-images.githubusercontent.com/68645584/115591999-a2999600-a2ca-11eb-9b70-38549060b799.png)
### All cocktails
<img width="708" alt="Screenshot 2021-04-21 at 17 59 39" src="https://user-images.githubusercontent.com/68645584/115592636-5ef35c00-a2cb-11eb-9ccd-fc57e19d0a09.png">

### Single cocktail recipe
<img width="724" alt="Screenshot 2021-04-21 at 17 58 35" src="https://user-images.githubusercontent.com/68645584/115592514-379c8f00-a2cb-11eb-8904-1d93d7c4f426.png">
Users are able to view 100 cocktail recipes and filter by alcohol type. They can click through to a single cocktail recipe page and generate a random cocktail if they can’t decide!

## Approach
* We began by researching free API’s to base our application around, settling on the cocktailsDB. 
* We viewed endpoints using Insomnia REST client to inspect the data available and decided to create a cocktail recipe resource. 
* Created a wireframe using Balsamiq to plan out the frontend:  
<img width="487" alt="Screenshot 2021-04-21 at 18 02 10" src="https://user-images.githubusercontent.com/68645584/115592869-b2fe4080-a2cb-11eb-9f3b-7cf2f8130395.png">
* Planned functionality in pseudocode.
* Set up react components (home, cocktails, random cocktail and individual cocktail pages).
* Created routes with react-router-dom for site navigation. 
* Created the main functionality and logic with React Hooks.
* Styled using a mix of Bulma and CSS.

### Data
The API didn’t return enough results in the free version to render the information we wanted on the main cocktails page. It was only possible to retrieve 25 cocktails with full information, ideally we wanted more results in order to make good use of the dropdown filters. As a workaround, we used different endpoints to build up the information. 
* An axios GET request returned 100 results containing a cocktail id, name and an image. 
* To get a full data set including ingredients and instructions we created the getCocktail function which made another GET request for each of the 100 cocktails. The information was pushed to an array and saved in state. 
* We were able to map over this now complete data to render cards for 100 cocktails in JSX. 
* By wrapping each cocktail card in a Link we passed the complete cocktail through to the individual recipe page using state.

```javascript
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
```

## Filter functionality 
Users can choose an alcohol type from the dropdown menu to filter cocktails depending on their favourite tipple. When the select option changes their preference is saved in state. 
The filterCocktails function then uses the complete cocktails dataset to return cocktails whose alcohol type matches the preference. To display the full menu to start with the user preference is set to ‘All’. 
```javascript
  function filterCocktails() {
    return allCocktails.filter(cocktail => {
      return (preference === 'All' || cocktail.strIngredient1 === preference || cocktail.strAlcoholic === preference)
    })
  }
  ```
  
 ### Future Improvements
* Replace generate random cocktail button with a more impactful CSS dice animation.
* The API appears to have changed its response data compared to when we first built the app in February 2021. As a result, the ingredients and measures are no longer rendered in the same way, making the single cocktail page a bit nonsensical. It would be good to investigate and play around with the data to fix this problem.

## Key learnings
* API’s: this project was hugely beneficial for my knowledge around accessing API endpoints. Looking back, it was risky to make 100 individual API requests, and we were lucky not to reach a call limit. However, it was a huge win to reverse engineer the API and find a solution to fill in the gaps in our data set.
* React Hooks: as this was my first-ever react app, it was so useful to practice using hooks such as passing state between components.
