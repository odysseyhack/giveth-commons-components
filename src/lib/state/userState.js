/**
 * Created by will on 10/04/19.
 */
export const initialState = {
  user: {
    name: 'Will',
    balance: 400000,
    tokenBalance: 10000
  }
}

export const userActions = {
  login: 'LOGIN',
  spend: 'SPEND'
}

export function reducer (state, action) {
  switch (action.type) {
    case userActions.login:
      return {
        ...state
      }
    case userActions.spend:

      return {
        ...state
      }
  }
}
