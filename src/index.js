import React from 'react'
import { render } from 'react-dom'
import { CampaignHeader, CommonsStateWrapper, CommonsNavHeader } from './lib'

import './lib/assets/styles/main.scss'

const App = () => (
  <div>
    <CommonsStateWrapper>
      <CommonsNavHeader />
      <CampaignHeader />

    </CommonsStateWrapper>
  </div>
)

render(<App />, document.getElementById('root'))
