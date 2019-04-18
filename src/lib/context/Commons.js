import React from 'react'
import { reducer, initialState } from '../state/commonsState'

const CommonsContext = React.createContext();


export function CommonsProvider ({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <CommonsContext.Provider value={value}>
    {children}
  </CommonsContext.Provider>
}

export default CommonsContext