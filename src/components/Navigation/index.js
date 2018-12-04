import React from 'react'
import { APP_NAME } from '../../constants/text'

import { Header } from './style'
import SignOutButton from '../SignOutButton'

const Navigation = () => (
  <Header>
    <h3>{APP_NAME} CMS</h3>
    <SignOutButton />
  </Header>
)

export default Navigation
