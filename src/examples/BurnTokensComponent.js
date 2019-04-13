/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import { campaignActions } from '../lib/state/campaignState'
import PrimaryButton from '../lib/stateless-components/PrimaryButton'
import PropTypes from 'prop-types'

import CampaignContext from '../lib/context/Campaign'

const BurnTokensComponent = ({ buttonName, actionText, user }) => {
  const { state, dispatch } = React.useContext(CampaignContext)
  const spendFunds = () => dispatch({ type: campaignActions.mintTokens, fundingAmount: 5000, tokenRecipient: user.address })

  return (
    <div className='eco-dai-action'>
      <h1>{state.name}</h1>
      <PrimaryButton onClick={spendFunds} >{buttonName}</PrimaryButton>
      <p>{actionText}</p>
    </div>
  )
}

BurnTokensComponent.propTypes = {
  buttonName: PropTypes.string.isRequired
}

export default BurnTokensComponent
