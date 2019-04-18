
export const views = {
  allCommons: "ALL COMMONS",
  createCommons: "CREATE COMMONS",
  currentCommons: "CURRENT COMMONS",
  selectedMilestone: "SELECTED MILESTONE"
}

export const initialState = {
  view: "ALL COMMONS"
}

export const viewActions = {
  changeView: "CHANGE VIEW"
};

export function reducer(state, action) {
  switch (action.type) {
    case viewActions.changeView:
      console.log("CHANGE VIEW", action.view)
      return {
        view: action.view
      }
  }
}