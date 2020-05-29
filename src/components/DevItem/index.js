import React, { useState } from 'react'
import './style.css'

const DevItem = ({ user, destroyUser, updateUser }) => {
  const { _id, name, github_username, bio, avatar_url } = user

  const [disable, setDisable] = useState(true)
  const [formData, setFormData] = useState({
    name,
    github_username,
    bio
  })

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  function saveUser() {
    updateUser(_id, formData)
    setDisable(!disable)
  }

  return (
    <div className="card">
      <div className="card_header">
        <div className="wrapper_avatar">
          <img src={avatar_url} alt={formData.name} />
        </div>
        <div className="wrapper_content">
          <input
            type="text"
            value={formData.name}
            name="name"
            className="strong"
            disabled={disable}
            onChange={e => onChange(e)}
          /><br />
          <input
            type="text"
            value={formData.github_username}
            name="github_username"
            className="span"
            disabled={disable}
            onChange={e => onChange(e)}
          />
        </div>
      </div>
      <div className="card_body">
        <input
          type="text"
          value={formData.bio}
          name="bio"
          className="p"
          disabled={disable}
          onChange={e => onChange(e)}
        />
      </div>
      <div className="card_footer">
        <button onClick={() => setDisable(!disable)}>Editar</button>
        <button onClick={() => saveUser()} className={disable ? 'd-none' : ''}>Salvar</button>
        <button onClick={() => destroyUser(_id)}>Apagar</button>
      </div>
    </div>
  )
}

export default DevItem
