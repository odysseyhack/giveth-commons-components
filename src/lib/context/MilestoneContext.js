import React from 'react';
import {reducer, initialState } from '../state/MilestonesState';

export const MilestoneContext = React.createContext();

export function MilestoneProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <MilestoneContext.Provider value={value}>
    {children}
  </MilestoneContext.Provider>
}
