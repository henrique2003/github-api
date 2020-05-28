import React from 'react'
import DevItem from './components/DevItem'
import './App.css'

const App = () => {
  return (
    <div className="wrapper_app">
      <div className="wrapper_title">
        <h1>Github-Api</h1>
      </div>
      <div className="container">
        <DevItem user={{
          name: 'Henrique de Melo',
          github_username: 'henrique2003',
          bio: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
          avatar_url: 'https://avatars2.githubusercontent.com/u/56162187?s=460&u=d8ffcbc88a354b9d26754d7f2e871ebd8e6d60b0&v=4'
        }} />
        <DevItem user={{
          name: 'Henrique de Melo',
          github_username: 'henrique2003',
          bio: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
          avatar_url: 'https://avatars2.githubusercontent.com/u/56162187?s=460&u=d8ffcbc88a354b9d26754d7f2e871ebd8e6d60b0&v=4'
        }} />
        <DevItem user={{
          name: 'Henrique de Melo',
          github_username: 'henrique2003',
          bio: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
          avatar_url: 'https://avatars2.githubusercontent.com/u/56162187?s=460&u=d8ffcbc88a354b9d26754d7f2e871ebd8e6d60b0&v=4'
        }} />
        <DevItem user={{
          name: 'Henrique de Melo',
          github_username: 'henrique2003',
          bio: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
          avatar_url: 'https://avatars2.githubusercontent.com/u/56162187?s=460&u=d8ffcbc88a354b9d26754d7f2e871ebd8e6d60b0&v=4'
        }} />
      </div>
    </div>
  )
}

export default App
