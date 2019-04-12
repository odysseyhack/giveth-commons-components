import React from 'react';
import { render } from "react-dom";
import { EcosystemHeader} from "./lib";
import { StateWrapper } from "./lib";

const App = () => (
  <div>
    <StateWrapper>
      <EcosystemHeader/>
    </StateWrapper>
  </div>
);

render(<App />, document.getElementById("root"));
