/*
 * @Date: 2022-05-28 16:15:38
 * @Description:
 */
import * as React from 'react'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import "@/config/interceptor"

import { Provider, store } from '@/store'
import App from './App'
import '@/assets/styles/globals.scss'

const container = document.getElementById('App')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
