import React from 'react'
import DisplayCandies from './DisplayCandies'
import {Route, Link} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <nav>
        Goodie
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Link to = "/display"> <h5>Go to candies!!!</h5> </Link>
        <Route exatc path = "/display" component = {DisplayCandies} />
        <Link to = "/"> <h5>Back</h5> </Link>
      </main>
    </div>
  )
}

export default Root
