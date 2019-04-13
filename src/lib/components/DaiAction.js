/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import { userActions } from '../state/userState'
import PrimaryButton from '../stateless-components/PrimaryButton'
import PropTypes from 'prop-types'

import UserContext from '../context/User'

const EcosystemDaiAction = ({ buttonName, actionText }) => {
  const { dispatch } = React.useContext(UserContext)
  const spendFunds = () => dispatch({ type: userActions.spend, amount: 5000 })

  return (
    <div className='eco-dai-action'>
      <PrimaryButton onClick={spendFunds}>{children}</PrimaryButton>
      <p>{actionText}</p>
    </div>
  )
}


export default EcosystemDaiAction
