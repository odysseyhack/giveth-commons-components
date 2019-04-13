export const initialState = {
  milestone: {name: 'foo'}
}

export const milestoneActions = {
  changeName: "BUY"
};

export function reducer(state, action) {
  switch (action.type) {
    case milestoneActions.changeName:
      return {
        ...state,
        milestone: {name: action.name}
      }
  }
}
