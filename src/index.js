import React from 'react'
import { render } from 'react-dom'
import { SelectedCommonsHeader, CommonsStateWrapper, CommonsNabBar } from './lib'

import './lib/assets/styles/main.scss'

const App = () => (
  <div>
    <CommonsStateWrapper>
      <CommonsNabBar />
      <SelectedCommonsHeader />
    </CommonsStateWrapper>
  </div>
)

render(<App />, document.getElementById('root'))
