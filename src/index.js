import React from 'react'
import { render } from 'react-dom'
<<<<<<< HEAD
import { CampaignHeader, CommonsStateWrapper, CommonsNavHeader } from './lib'

import './lib/assets/styles/main.scss'

const App = () => (
  <div>
    <CommonsStateWrapper>
      <CommonsNavHeader />
      <CampaignHeader />
=======
import { CampaignHeader } from './lib'
import { CommonsStateWrapper, MintTokensAction } from './lib'
import UserComponent from './examples/UserComponent'
import BurnTokensComponent from './examples/BurnTokensComponent';
import {BurnTokensAction} from './lib/index'
const App = () => (
  <div>
    <CommonsStateWrapper>
      <MintTokensAction buttonName="Mint tokens" fundingAmount={1000}/>
      <BurnTokensAction buttonName="Burn tokens" fundingAmount={100}/>
      {/*<CampaignHeader />*/}
      {/*<UserComponent />*/}
>>>>>>> 2715e1b09cc4ea8cf9d92c9326212b25890b8511
    </CommonsStateWrapper>
  </div>
)

render(<App />, document.getElementById('root'))
