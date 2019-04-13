/**
 * Created by sponnet
 */

export const initialState = {
  totalSupply: 0,
  milestones: []
}

export const cvActions = {
  addMilestone: 'ADDMILESTONE',
  setTotalSupply: 'SETTOTALSUPPLY'
}

export function reducer (state, action) {
  switch (action.type) {
    case cvActions.addMilestone:
      return {
        ...state,
        milestones: [...state.milestones, action.newItem]
      }
    case cvActions.setTotalSupply:
      return {
        ...state,
        totalSupply: action.totalSupply
      }
  }
}

// this should go to the smart contract lib
