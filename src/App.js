import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className="wrapper_app">
      <div className="wrapper_title">
        <h1>Github-Api</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card_header">
            <div className="wrapper_avatar">
              <img src="https://avatars2.githubusercontent.com/u/56162187?s=460&u=d8ffcbc88a354b9d26754d7f2e871ebd8e6d60b0&v=4" alt="" />
            </div>
            <div className="wrapper_content">
              <strong>Henrique de Melo</strong><br />
              <span>henrique2003</span>
            </div>
          </div>
          <div className="card_body">
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum</p>
          </div>
          <div className="card_footer">
            <button>Editar</button>
            <button>Apagar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
