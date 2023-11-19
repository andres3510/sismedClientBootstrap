import React from 'react'
import ReactDOM from 'react-dom/client'
//import Login from './components/login'
import Login from './Backend/Login'
import Header from './components/Header'
import Footer from './components/Footer'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Login/>
    <Footer/>
  </React.StrictMode>,
)
