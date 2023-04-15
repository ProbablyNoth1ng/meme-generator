import React from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Main from './components/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {


  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  )
}

