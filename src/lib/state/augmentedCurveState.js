/**
 * Created by will on 11/04/19.
 */
export const initialState = {
  curveName: '',
  tokenPrice: 10,
  tokenSupply: 20000
}

export const curveActions = {
  mintTokens: 'MINT',
  burnTokens: 'BURN'
}

export function reducer (state, action) {
  switch (action.type) {
    case curveActions.mintTokens:
      return {
        ...state,
        tokenSupply: (state.tokenSupply + action.amount),
        tokenPrice: calculateNewPrice(state, action.amount)
      }
    case curveActions.burnTokens: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}

function calculateNewPrice (curve, amount) {
  // TODO some maths
  return curve.tokenPrice + (amount * 0.1)
}
