import React, { useEffect, useState } from 'react'
import DevItem from './components/DevItem'
import api from './services/api'
import './App.css'

const App = () => {
  const [devs, setDevs] = useState([])
  const [newDev, setNewDev] = useState('')
  const [inputError, setinputError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)

    async function getDevs() {
      const res = await api.get('users')

      return setDevs(res.data)
    }
    getDevs()
  }, [])

  const destroyUser = async (id) => {
    try {
      await api.delete(`user/${id}`)

      return setDevs(devs.filter((dev) => dev._id !== id))
    } catch (error) {
      return console.error(error.message)
    }
  }

  const updateUser = async (id, data) => {
    try {
      const res = await api.put(`user/${id}`, data)

      setDevs([devs.map(dev => {
        if (dev._id === id) {
          console.log(...dev)
          return {
            ...res.data
          }
        }
      })])
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSubmit = async e => {
    try {
      e.preventDefault()

      if (!newDev) {
        return setinputError('Campo em branco')
      }

      setinputError('')
      const res = await api.post('user', {
        github_username: newDev
      })

      return setDevs([...devs, res.data])
    } catch (error) {
      setinputError('Dev não encontrado')
      return console.log(error.message)
    }
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
              {inputError && <p className="error">{inputError}</p>}
              <input
                type="text"
                placeholder="Exemplo: diego3g"
                value={newDev}
                onChange={(e) => setNewDev(e.target.value)}
              />
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
        <div className="container">
          {devs.length !== 0 ? devs.map((dev, index) => (
            <DevItem key={index} user={dev} destroyUser={destroyUser} updateUser={updateUser} />
          )) : <p className="alert">Nenhum dev cadastrado no momento!</p>}
        </div>
      </div>
    </div>
  )
}

export default App
