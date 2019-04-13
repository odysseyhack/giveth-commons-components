export const initialState = {
  milestone: {
    name: 'Plant 10 trees',
    description: '...',

    // ADDRESSES
    // Represents the address of the creator of the milestone
    creatorAddr: '...',
    // Represents the address of the appointed worker
    wizardAddr: '...',
    // Represents the address of the appointed validator
    oracleAddr: '...',

    // AMOUNTS
    // Represents the amount of external funding asked to carry out the milestone
    askedAmount: 1000,
    // Represents the amount of external funding commited by individuals
    donatedAmount: 500,
    // Represents the amount of internal funding commited by the commons
    // TODO: potentially coming from or a function of `nomination.votes`
    momentumAmount: 300,

    // FLAGS
    // Represents if the milestone has been marked as done by the wizard
    isDone: false,
    // Represents if the milestone done status has been validated by the oracle
    isValidated: false,
    // Represents if the milestone has been redeemed
    isRedeemed: false,

    // OBJECTS
    // TODO: link to a nomination?
    nomination: null,
  }
}

export const milestoneActions = {
  donate: "DONATE",
  nominate: "NOMINATE",
  redeem: "REDEEM",
  markDone: "COMPLETE",
  markValidated: "VALIDATE",
};

export function reducer(state, action) {
  switch (action.type) {
    case milestoneActions.donate: {
      return {
        ...state,
        donatedAmount: state.milestone.donatedAmount + action.amount
      }
    }
    case milestoneActions.nominate: {
      return {
        ...state,
        // TODO: create a nomination
        nomination: null
      }
    }
    case milestoneActions.redeem: {
      // TODO: send `donatedAmount` to `wizardAddr`
      // TODO: send `momentumAmount` to curve for `wizardAddr`
      return {
        ...state,
        isRedeemed: true
      }
    }
    case milestoneActions.markDone: {
      return {
        ...state,
        isDone: true
      }
    }
    case milestoneActions.markValidated: {
      return {
        ...state,
        isValidated: true
      }
    }
    default: {
      return state
    }
  }
}
