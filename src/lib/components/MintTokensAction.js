/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import { campaignActions } from '../state/campaignState'
import PrimaryButton from '../stateless-components/PrimaryButton'
import PropTypes from 'prop-types'

import CampaignContext from '../context/Campaign'
import UserContext from '../context/User'

const MintTokensAction = ({ buttonName, actionText, fundingAmount }) => {
  const { dispatch } = React.useContext(CampaignContext);
  const {state} = React.useContext(UserContext);

  const mintTokens = () => {
    console.log("MINT", state)
    dispatch({ type: campaignActions.mintTokens, fundingAmount: fundingAmount, tokenRecipient: state.user.address })
  };

  return (
    <div className='action'>
      <PrimaryButton onClick={mintTokens}>{buttonName}</PrimaryButton>
    </div>
  )
}

MintTokensAction.propTypes = {
  buttonName: PropTypes.string.isRequired,
  fundingAmount: PropTypes.number.isRequired
};

export default MintTokensAction
