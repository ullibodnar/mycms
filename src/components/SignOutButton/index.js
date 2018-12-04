import React from 'react'

import { withFirebase } from '../Firebase'
import StyledSignOutButton from './style'

const SignOutButtonBase = ({ firebase }) => (
  <div>
    <StyledSignOutButton type='button' onClick={firebase.doSignOut}>
      Sign Out
    </StyledSignOutButton>
  </div>
)

const SignOutButton = withFirebase(SignOutButtonBase)

export default SignOutButton
