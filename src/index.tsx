import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from '@/components/App'

import { store, persister } from '@/store/store'

import GlobalStyles from '@/globalStyles'
import { theme } from '@/theme'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </ThemeProvider>
      <GlobalStyles />
    </Provider>
  </React.StrictMode>,
)
