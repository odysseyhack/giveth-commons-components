/**
 * Created by will on 09/04/19.
 */
import React from 'react'
import { UserProvider } from '../context/User'
import { AugmentedCurveProvider } from '../context/AugmentedCurve'

export const StateWrapper = ({ children }) => {
  return (
    <UserProvider>
      <AugmentedCurveProvider>
        {children}
      </AugmentedCurveProvider>
    </UserProvider>
  )
}

// export default StateWrapper;
