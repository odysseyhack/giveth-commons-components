import React from 'react';
import { render } from "react-dom";
import { CampaignHeader } from "./lib";
import { CommonsStateWrapper } from "./lib";

const App = () => (
  <div>
    <CommonsStateWrapper>
      <CampaignHeader/>
    </CommonsStateWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
