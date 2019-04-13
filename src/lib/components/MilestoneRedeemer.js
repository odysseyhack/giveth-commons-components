import React from 'react';
import { MilestoneContext } from '../context/Milestone'
import { milestoneActions } from '../state/MilestonesState'

export const MilestoneRedeemer = () => {
  const {state, dispatch} = React.useContext(MilestoneContext)

  const changeName = () => {
    dispatch({type: milestoneActions.changeName, name: 'bar'})
  }

  return (
    <div>
      {state.milestone.name}
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}
