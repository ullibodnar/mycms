import React from 'react'

import { CardPaper } from '../global-styled-components'
import Navigation from '../Navigation'

const Home = () => (
  <div>
    <Navigation />
    <CardPaper>
      <h3>Survey</h3>
      <p>Go to dashboard</p>
    </CardPaper>
  </div>
)

export default Home
