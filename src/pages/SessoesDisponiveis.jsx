import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sessoes = () => {
  const [sessoes, setSessoes] = useState([])
  const [filmes, setFilmes] = useState([])
  const [salas, setSalas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem('sessoes') || '[]'))
    setFilmes(JSON.parse(localStorage.getItem('filmes') || '[]'))
    setSalas(JSON.parse(localStorage.getItem('salas') || '[]'))
  }, [])

  const handleCompra = (index) => {
    navigate(`/venda?sessao=${index}`)
  }

  return (
    <div>
      <h2 className="mb-4">Sessões Disponíveis</h2>
      {sessoes.length === 0 ? (
        <p className="text-muted">Nenhuma sessão cadastrada.</p>
      ) : (
        <div className="row">
          {sessoes.map((s, i) => (
            <div key={i} className="col-md-12 card p-3 mb-3">
              <strong>Filme:</strong> {filmes[s.filmeIndex]?.titulo || 'N/A'}<br />
              <strong>Sala:</strong> {salas[s.salaIndex]?.nome || 'N/A'}<br />
              <strong>Data e Hora:</strong> {s.dataHora.replace('T', ' ')}<br />
              <strong>Preço:</strong> R$ {parseFloat(s.preco).toFixed(2)}<br />
              <button onClick={() => handleCompra(i)} className="btn btn-primary mt-2">
                <i className="bi bi-cart-plus"></i> Comprar Ingresso
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sessoes