import React from 'react'
import { render } from 'react-dom'
import { CommonsStateWrapper, MintTokensAction, BurnTokensAction } from './lib'

const App = () => (
  <div>
    <CommonsStateWrapper>
      <MintTokensAction buttonName='Mint tokens' fundingAmount={1000} />
      <BurnTokensAction buttonName='Burn tokens' fundingAmount={100} />
    </CommonsStateWrapper>
  </div>
)

render(<App />, document.getElementById('root'))
