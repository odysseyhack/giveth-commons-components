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

      // TODO call library calculate new supply and price
      // TODO update user state
      return {
        ...state
      }
    case campaignActions.burnTokens: {

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
