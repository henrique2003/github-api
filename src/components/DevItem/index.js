import React, { useState } from 'react'
import './style.css'

const DevItem = ({ user }) => {
  const { name, github_username, bio, avatar_url } = user

  const [disable, setDisable] = useState(true)

  const onEdit = () => {

  }

  return (
    <div className="card">
      <div className="card_header">
        <div className="wrapper_avatar">
          <img src={avatar_url} alt={name} />
        </div>
        <div className="wrapper_content">
          <input type="text" value={name} className="strong" disabled={disable} /><br />
          <input type="text" value={github_username} className="span" disabled={disable} />
        </div>
      </div>
      <div className="card_body">
        <input type="text" value={bio} className="p" disabled={disable} />
      </div>
      <div className="card_footer">
        <button onClick={() => setDisable(!disable)}>Editar</button>
        <button onClick={onEdit} className={disable ? 'd-none' : ''}>Salvar</button>
        <button>Apagar</button>
      </div>
    </div>
  )
}

export default DevItem
