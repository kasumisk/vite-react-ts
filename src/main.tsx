import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store';

import RouterContainer from './routes/Router';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
