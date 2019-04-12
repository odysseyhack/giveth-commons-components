import React from 'react';
import { render } from "react-dom";
import { CampaignHeader } from "./lib";
import { StateWrapper } from "./lib";

const App = () => (
  <div>
    <StateWrapper>
      <CampaignHeader/>
    </StateWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
