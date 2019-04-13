/**
 * Created by will on 10/04/19.
 */
export const initialState = {
  user: {
    name: 'Will',
    address: 12345,
    balance: 10000,
    tokenBalance: 1000
  }
}

export const userActions = {
  mintTokens: 'MINT',
  burnTokens: 'BURN'
}

export function reducer (state, action) {
  switch (action.type) {
    case userActions.mintTokens:
      return {
        ...state,
        user: {
          balance: state.user.balance - action.fundingAmount,
          tokenBalance: state.user.tokenBalance + action.tokensBought
        }
      }
    case userActions.burnTokens:
      return {
        ...state,
        user: {
          balance: state.user.balance + action.withdrawalAmount,
          tokenBalance: state.user.tokenBalance - action.tokensBurnt
        }
      }
  }
}
