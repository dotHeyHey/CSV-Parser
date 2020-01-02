import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import Theme from './Theme'

import App from './App'

ReactDOM.render(
  <Theme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Theme>,
  document.getElementById('app')
)

