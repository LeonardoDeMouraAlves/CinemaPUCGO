import React, { useState } from 'react'
import BotaoSalvar from '../components/BotaoSalvar'

const Filmes = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [genero, setGenero] = useState('Ação')
  const [classificacao, setClassificacao] = useState('L')
  const [duracao, setDuracao] = useState('')
  const [estreia, setEstreia] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const novoFilme = { titulo, descricao, genero, classificacao, duracao, estreia }
    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]')
    filmes.push(novoFilme)
    localStorage.setItem('filmes', JSON.stringify(filmes))

    alert('Filme cadastrado com sucesso!')
    setTitulo('')
    setDescricao('')
    setGenero('Ação')
    setClassificacao('L')
    setDuracao('')
    setEstreia('')
  }

  return (
    <div>
      <h2 className="mb-4">Cadastro de Filmes</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea className="form-control" value={descricao} onChange={e => setDescricao(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Gênero</label>
          <select className="form-select" value={genero} onChange={e => setGenero(e.target.value)}>
            <option>Ação</option><option>Comédia</option><option>Drama</option><option>Terror</option><option>Ficção</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Classificação</label>
          <select className="form-select" value={classificacao} onChange={e => setClassificacao(e.target.value)}>
            <option>L</option><option>10</option><option>12</option><option>14</option><option>16</option><option>18</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Duração (min)</label>
          <input type="number" className="form-control" value={duracao} onChange={e => setDuracao(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Data de Estreia</label>
          <input type="date" className="form-control" value={estreia} onChange={e => setEstreia(e.target.value)} required />
        </div>
        <div className="mt-3"><BotaoSalvar texto="Salvar Filme" /></div>
        </form>
    </div>
  )
}

export default Filmes