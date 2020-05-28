import React from 'react'
import './style.css'

const DevItem = ({ user }) => {
  const { name, github_username, bio, avatar_url } = user

  return (
    <div className="card">
      <div className="card_header">
        <div className="wrapper_avatar">
          <img src={avatar_url} alt={name} />
        </div>
        <div className="wrapper_content">
          <strong>{name}</strong><br />
          <span>{github_username}</span>
        </div>
      </div>
      <div className="card_body">
        <p>{bio}</p>
      </div>
      <div className="card_footer">
        <button>Editar</button>
        <button>Apagar</button>
      </div>
    </div>
  )
}

export default DevItem
