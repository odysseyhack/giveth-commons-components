/**
 * Created by will on 09/04/19.
 */
import React from 'react'
import { UserProvider } from '../context/User'
import { CommonsProvider } from '../context/Commons'
import { ConvictionVotingCurveProvider } from '../context/ConvictionVotingCurve'
import {ViewProvider} from '../context/View'

export const StateWrapper = ({ children }) => {
  return (
    <UserProvider>
      <CommonsProvider>
        <ConvictionVotingCurveProvider>
          <ViewProvider>
            {children}
          </ViewProvider>
        </ConvictionVotingCurveProvider>
      </CommonsProvider>
    </UserProvider>
  )
}

// export default StateWrapper;
