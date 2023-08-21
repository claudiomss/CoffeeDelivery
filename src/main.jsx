import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { Sucess } from './pages/sucess'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/sucess" element={<Sucess />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
