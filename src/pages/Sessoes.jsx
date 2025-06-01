import React, { useState, useEffect } from 'react'
import BotaoSalvar from '../components/BotaoSalvar'

const Sessoes = () => {
  const [filmeIndex, setFilmeIndex] = useState('')
  const [salaIndex, setSalaIndex] = useState('')
  const [dataHora, setDataHora] = useState('')
  const [preco, setPreco] = useState('')
  const [idioma, setIdioma] = useState('Dublado')
  const [formato, setFormato] = useState('2D')
  const [filmes, setFilmes] = useState([])
  const [salas, setSalas] = useState([])

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes') || '[]'))
    setSalas(JSON.parse(localStorage.getItem('salas') || '[]'))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const sessao = { filmeIndex, salaIndex, dataHora, preco, idioma, formato }
    const sessoes = JSON.parse(localStorage.getItem('sessoes') || '[]')
    sessoes.push(sessao)
    localStorage.setItem('sessoes', JSON.stringify(sessoes))
    alert('Sessão cadastrada com sucesso!')
    setFilmeIndex('')
    setSalaIndex('')
    setDataHora('')
    setPreco('')
    setIdioma('Dublado')
    setFormato('2D')
  }

  return (
    <div>
      <h2 className="mb-4">Cadastro de Sessões</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <div className="mb-3">
          <label className="form-label">Filme</label>
          <select className="form-select" value={filmeIndex} onChange={e => setFilmeIndex(e.target.value)} required>
            <option value="">Selecione...</option>
            {filmes.map((f, i) => <option key={i} value={i}>{f.titulo}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Sala</label>
          <select className="form-select" value={salaIndex} onChange={e => setSalaIndex(e.target.value)} required>
            <option value="">Selecione...</option>
            {salas.map((s, i) => <option key={i} value={i}>{s.nome}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Data e Hora</label>
          <input type="datetime-local" className="form-control" value={dataHora} onChange={e => setDataHora(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input type="number" className="form-control" value={preco} onChange={e => setPreco(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Idioma</label>
          <select className="form-select" value={idioma} onChange={e => setIdioma(e.target.value)}>
            <option>Dublado</option><option>Legendado</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Formato</label>
          <select className="form-select" value={formato} onChange={e => setFormato(e.target.value)}>
            <option>2D</option><option>3D</option>
          </select>
        </div>
        <BotaoSalvar texto="Salvar Sessão" />
      </form>
    </div>
  )
}

export default Sessoes