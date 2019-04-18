/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import DaiAction from './DaiAction'
import Givethers from './Givethers'
import CommonsContext from '../context/Commons';
import {commonsViews, commonsActions} from '../state/commonsState'

const SelectedCommonsHeader = () => {

  const {state, dispatch} = React.useContext(CommonsContext);


  console.log(state)
  return (
    <div className='eco-header' style={{ backgroundImage: `url(${state.imageUrl})`}}>
      <div className='eco-header-content'>

        <h3>{state.isHatchPhase ? "HATCH PHASE" : "COMMONS"}</h3>

        <h1>{state.name}</h1>
        <p>{state.description}</p>
        <div className='row'>
          <DaiAction actionText='1510 xDAI Donated' >Donate xDAI</DaiAction>
          <Givethers count={state.contributorCount} />
        </div>
      </div>
      <div className='eco-nav-bar'>
        <button
          onClick={() => dispatch({type: commonsActions.changeView, view: commonsViews.about})}
          selected={state.commonsView === commonsViews.about}>
          ABOUT CAMPAIGN</button>
        <button
          selected={state.commonsView === commonsViews.participate}
          onClick={() => dispatch({type: commonsActions.changeView, view: commonsViews.participate})}
        >PARTICIPATE</button>
        <button
          onClick={() => dispatch({type: commonsActions.changeView, view: commonsViews.milestones})}
        >MILESTONES</button>
        <button
          onClick={() => dispatch({type: commonsActions.changeView, view: commonsViews.community})}
        >COMMUNITY</button>
        <button
          onClick={() => dispatch({type: commonsActions.changeView, view: commonsViews.voting})}>
          VOTING</button>
      </div>
    </div>
  )
}

export default SelectedCommonsHeader
