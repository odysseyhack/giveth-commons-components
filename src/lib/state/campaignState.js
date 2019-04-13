/**
 * Created by will on 13/04/19.
 */
export const initialState = {
  name: 'Planting trees in Indonesian Rainforest',
  curve: {
    tokenSupply: 1000,
    tokenPrice: 1
  }
}

export const campaignActions = {
  mintTokens: 'MINT',
  burnTokens: 'BURN'
}

export function reducer (state, action) {
  switch (action.type) {
    case campaignActions.mintTokens:

      console.log('MINT TOKENS', action)
      // action { fundingAmount, tokenRecipient }

      // TODO call library calculate new supply and price
      // TODO update user state
      return {
        ...state
      }
      // return {
      //   ...state,
      //   tokenSupply: (state.tokenSupply + action.amount),
      //   tokenPrice: calculateNewPrice(state, action.amount)
      // }
    case campaignActions.burnTokens: {
      // action { tokenAmount, withdrawalRecipient }

      // TODO call library calculate new supply and price
      // TODO update user state

      return {
        ...state
      }
    }
    default:
      return {
        ...state
      }
  }
}
