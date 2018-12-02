import React from 'react'
import { Link } from 'react-router-dom'

import { SIGN_IN } from '../../constants/routes'

const Landing = () => (
  <div>
    <h1>MyCMS</h1>
    <p>
      Please <Link to={SIGN_IN}>sign in</Link>.
    </p>
  </div>
)

export default Landing
