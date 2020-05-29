import React, { useEffect, useState } from 'react'
import DevItem from './components/DevItem'
import api from './services/api'
import './App.css'

const App = () => {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    async function getDevs() {
      const res = await api.get('http://localhost:3001/api/users')
      setDevs(res.data)
    }
    getDevs()
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
  }

  return (
    <div className="wrapper_app">
      <div className="wrapper_title">
        <h1>Github-Api</h1>
      </div>
      <div className="row">
        <div className="wrapper_form">
          <form onSubmit={onSubmit}>
            <div className="content">
              <h4>Cadastra usuário:</h4>
              <input type="text" placeholder="Exemplo: diego3g" />
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
        <div className="container">
          {devs.length !== 0 ? devs.map((dev, index) => (
            <DevItem key={index} user={dev} />
          )) : <p className="alert">Nenhum dev cadastrado no momento!</p>}
        </div>
      </div>
    </div>
  )
}

export default App
