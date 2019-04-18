import React from 'react';
import {reducer, initialState} from '../state/viewState';

const ViewContext = React.createContext();

export function ViewProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <ViewContext.Provider value={value}>
    {children}
    </ViewContext.Provider>
}

export default ViewContext;