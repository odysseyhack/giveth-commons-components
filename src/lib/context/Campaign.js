/**
 * Created by will on 13/04/19.
 */
import React from 'react'
import { reducer, initialState } from '../state/campaignState'

const CampaignContext = React.createContext()

export function CampaignProvider ({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <CampaignContext.Provider value={value}>
    {children}
  </CampaignContext.Provider>
}

export default CampaignContext
