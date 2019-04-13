/**
 * Created by will on 09/04/19.
 */
import React from "react";
import { UserProvider } from "../context/User";
import { AugmentedCurveProvider } from "../context/AugmentedCurve";
import { ConvictionVotingCurveProvider } from "../context/ConvictionVotingCurve";

export const StateWrapper = ({ children }) => {
  return (
    <UserProvider>
      <AugmentedCurveProvider>
        <ConvictionVotingCurveProvider>
          {children}
        </ConvictionVotingCurveProvider>
      </AugmentedCurveProvider>
    </UserProvider>
  );
};

// export default StateWrapper;
