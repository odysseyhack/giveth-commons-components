/**
 * Created by will on 09/04/19.
 */
import React from 'react';
import { UserProvider } from '../context/User';
import { AugmentedCurveProvider } from '../context/AugmentedCurve';
import { MilestoneProvider } from '../context/Milestone'

export const StateWrapper = ({ children }) => {
  return (
    <UserProvider>
      <MilestoneProvider>
        <AugmentedCurveProvider>
          {children}
        </AugmentedCurveProvider>
      </MilestoneProvider>
    </UserProvider>
  )
};

// export default StateWrapper;
