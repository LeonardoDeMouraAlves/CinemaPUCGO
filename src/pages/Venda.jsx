import React, { useState, useEffect } from 'react'
import BotaoConfirmarVenda from '../components/BotaoConfirmarVenda'

const Venda = () => {
  const [sessaoIndex, setSessaoIndex] = useState('')
  const [cliente, setCliente] = useState('')
  const [cpf, setCpf] = useState('')
  const [assento, setAssento] = useState('')
  const [pagamento, setPagamento] = useState('Cartão')
  const [sessoes, setSessoes] = useState([])
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem('sessoes') || '[]'))
    setFilmes(JSON.parse(localStorage.getItem('filmes') || '[]'))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const ingressos = JSON.parse(localStorage.getItem('ingressos') || '[]')
    const duplicado = ingressos.some(i => i.sessaoIndex === sessaoIndex && i.assento.toUpperCase() === assento.toUpperCase())
    if (duplicado) {
      alert("Assento já vendido para essa sessão!")
      return
    }
    const ingresso = { sessaoIndex, cliente, cpf, assento, pagamento }
    ingressos.push(ingresso)
    localStorage.setItem('ingressos', JSON.stringify(ingressos))
    alert("Ingresso registrado com sucesso!")
    setCliente('')
    setCpf('')
    setAssento('')
    setPagamento('Cartão')
  }

  return (
    <div>
      <h2 className="mb-4">Venda de Ingressos</h2>
      <form onSubmit={handleSubmit} className="text-start">
        <div className="mb-3">
          <label className="form-label">Sessão</label>
          <select className="form-select" value={sessaoIndex} onChange={e => setSessaoIndex(e.target.value)} required>
            <option value="">Selecione...</option>
            {sessoes.map((s, i) => (
              <option key={i} value={i}>
                {filmes[s.filmeIndex]?.titulo || 'Sessão'} - {s.dataHora}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Nome do Cliente</label>
          <input className="form-control" value={cliente} onChange={e => setCliente(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input className="form-control" value={cpf} onChange={e => setCpf(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Assento</label>
          <input className="form-control" value={assento} onChange={e => setAssento(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Pagamento</label>
          <select className="form-select" value={pagamento} onChange={e => setPagamento(e.target.value)}>
            <option>Cartão</option><option>Pix</option><option>Dinheiro</option>
          </select>
        </div>
        <BotaoConfirmarVenda />
      </form>
    </div>
  )
}

export default Venda