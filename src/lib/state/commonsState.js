/**
 * Created by will on 17/04/19.
 */
import React from 'react';
const headerUrl = process.env.PUBLIC_URL + '/images/rainforest-header.png';

// const viewContext = React.useContext(ViewContext);

export const commonsViews = {
  about: 'ABOUT',
  participate: 'PARTICIPATE',
  milestones: 'MILESTONES',
  community: 'COMMUNITY',
  voting: 'VOTING'
}

export const initialState = {
  name: 'Planting trees in Indonesian Rainforest',
  description: 'A commons supporting developing and protecting the indonesian rainforest',
  commonsView: commonsViews.participate,
  imageUrl: headerUrl,
  contributorCount: 11,
  donationsCount: 22,
  tokenName: "GIV",
  isHatchPhase: false,
  curve: {
    reserveToken: 12345678,
    reserveRatio: 142857, // reserveRatio = kappa ~ 6
    gasPrice: 15000000000, // 15gwei
    theta: Math.ceil(200000), // % in ppm
    p0: Math.ceil(0.2),
    initialRaise: Math.ceil(3000000),
    fundingPool: 10000000,
    friction: Math.ceil(20000), // % in ppm
    duration: 3,
    minimunContribution: 20,
    address: 1234567,
    tokenSupply: 1000,
    currentUserBalance: 220
  }
}

export const commonsActions = {
  mintTokens: 'MINT',
  burnTokens: 'BURN',
  initialise: 'INITIALISE',
  selectCommons: 'SELECT',
  changeView: "CHANGE VIEW",
  setHatchPhase: "SET HATCH PHASE"
}

export function reducer (state, action) {
  switch (action.type) {
    case commonsActions.setHatchPhase:
      return {
        ...state,
        isHatchPhase: action.isHatchPhase
      };
    case commonsActions.changeView:
      return {
        ...state,
        commonsView: action.view
      };
    case commonsActions.selectCommons:
      // TODO some fetching from the contract state
      console.log("FETCH COMMONS", action.address)
      // viewContext.dispatch({type: viewActions.changeView, view: views.currentCommons})

      return action.commons;
    case commonsActions.initialise:
      console.log("INITIALISE", action.newCommons)
      return action.newCommons;
    case commonsActions.mintTokens:

      console.log('MINT TOKENS', action)

      // TODO call library calculate new supply and price
      // TODO update user state
      return {
        ...state
      }
    case commonsActions.burnTokens: {

      // TODO call library calculate new supply and price
      // TODO update user state

      return {
        ...state
      }
    }
    default:
      return {
        ...state
      }
  }
}
