/**
 * Created by will on 10/04/19.
 */
export const initialState = {
  user: {
    name: "Will",
    address: 12345,
    balance: 10000,
    tokenBalance: [{
      tokenId: 1,
      balance: 1000
    }]
  }
}

export const userActions = {
  login: 'LOGIN',
  spend: 'SPEND'
}

export function reducer(state, action) {
  switch (action.type) {
    case userActions.login:
      return {
        ...state
      };
    case userActions.spend:

      return {
        ...state
      }
  }
}
