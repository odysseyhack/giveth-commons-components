/**
 * Created by sponnet
 */
import React from 'react';
import {reducer, initialState} from '../state/convictionVotingCurveState';

const ConvictionVotingCurveContext = React.createContext();

export function ConvictionVotingCurveProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <ConvictionVotingCurveContext.Provider value={value}>
    {children}
  </ConvictionVotingCurveContext.Provider>
}

export default ConvictionVotingCurveContext;