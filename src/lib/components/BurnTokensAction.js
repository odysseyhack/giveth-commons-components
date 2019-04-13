/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import { campaignActions } from '../state/campaignState'
import PrimaryButton from '../stateless-components/PrimaryButton'
import PropTypes from 'prop-types'

import CampaignContext from '../context/Campaign'
import UserContext from '../context/User'

const BurnTokensAction = ({ buttonName, actionText, tokenAmount }) => {
  const { dispatch } = React.useContext(CampaignContext)
  const { state } = React.useContext(UserContext)

  const burnTokens = () => {
    console.log('MINT', state)
    dispatch({ type: campaignActions.burnTokens, fundingAmount: tokenAmount, withdrawalRecipient: state.user.address })
  }

  return (
    <div className='action'>
      <PrimaryButton onClick={burnTokens}>{buttonName}</PrimaryButton>
    </div>
  )
}

BurnTokensAction.propTypes = {
  buttonName: PropTypes.string.isRequired,
  tokenAmount: PropTypes.number.isRequired
}

export default BurnTokensAction
