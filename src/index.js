import React from 'react'
import { render } from 'react-dom'
import { CampaignHeader } from './lib'
import { CommonsStateWrapper, MintTokensAction } from './lib'
import UserComponent from './examples/UserComponent'
import BurnTokensComponent from './examples/BurnTokensComponent';

const App = () => (
  <div>
    <CommonsStateWrapper>
      <MintTokensAction buttonName="Mint tokens" fundingAmount={1000}/>
      {/*<CampaignHeader />*/}
      {/*<UserComponent />*/}
    </CommonsStateWrapper>
  </div>
)

render(<App />, document.getElementById('root'))
