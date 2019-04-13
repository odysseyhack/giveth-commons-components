/**
 * Created by will on 09/04/19.
 */
import React from 'react'
import { UserProvider } from '../context/User'
import { CampaignProvider} from '../context/Campaign'

export const StateWrapper = ({ children }) => {
  return (
    <UserProvider>
      <CampaignProvider>
        {children}
      </CampaignProvider>
    </UserProvider>
  )
}