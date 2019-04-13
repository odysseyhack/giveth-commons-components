import React from 'react';
import { render } from "react-dom";
import { CampaignHeader } from "./lib";
import { CommonsStateWrapper } from "./lib";
import UserComponent from './examples/UserComponent';

const App = () => (
  <div>
    <CommonsStateWrapper>
      <CampaignHeader/>
      <UserComponent/>
    </CommonsStateWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
