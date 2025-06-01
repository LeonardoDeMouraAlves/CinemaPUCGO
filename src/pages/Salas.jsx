import React, { useState } from 'react'
import BotaoSalvar from '../components/BotaoSalvar'

const Salas = () => {
  const [nome, setNome] = useState('')
  const [capacidade, setCapacidade] = useState('')
  const [tipo, setTipo] = useState('2D')

  const handleSubmit = (e) => {
    e.preventDefault()
    const sala = { nome, capacidade, tipo }
    const salas = JSON.parse(localStorage.getItem('salas') || '[]')
    salas.push(sala)
    localStorage.setItem('salas', JSON.stringify(salas))
    alert('Sala cadastrada com sucesso!')
    setNome('')
    setCapacidade('')
    setTipo('2D')
  }

  return (
    <div>
      <h2 className="mb-4">Cadastro de Salas</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <div className="mb-3">
          <label className="form-label">Nome da Sala</label>
          <input className="form-control" value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Capacidade</label>
          <input type="number" className="form-control" value={capacidade} onChange={e => setCapacidade(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <select className="form-select" value={tipo} onChange={e => setTipo(e.target.value)}>
            <option>2D</option>
            <option>3D</option>
            <option>IMAX</option>
          </select>
        </div>
        <BotaoSalvar texto="Salvar Sala" />
      </form>
    </div>
  )
}

export default Salas