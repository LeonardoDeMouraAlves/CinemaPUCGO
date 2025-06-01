import React, { useEffect, useState } from 'react'
import CardIngresso from '../components/CardIngresso'

const Ingressos = () => {
  const [ingressos, setIngressos] = useState([])
  const [sessoes, setSessoes] = useState([])
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const storedIngressos = JSON.parse(localStorage.getItem('ingressos') || '[]')
    const storedSessoes = JSON.parse(localStorage.getItem('sessoes') || '[]')
    const storedFilmes = JSON.parse(localStorage.getItem('filmes') || '[]')
    setIngressos(storedIngressos)
    setSessoes(storedSessoes)
    setFilmes(storedFilmes)
  }, [])

  return (
    <div>
      <h2 className="mb-4">Ingressos Vendidos</h2>
      {ingressos.length === 0 ? (
        <p className="text-muted">Nenhum ingresso registrado.</p>
      ) : (
        <div className="row">
          {ingressos.map((ing, i) => {
            const sessao = sessoes[ing.sessaoIndex]
            const filme = filmes[sessao?.filmeIndex] || { titulo: 'Desconhecido' }
            return (
              <CardIngresso
                key={i}
                filme={filme.titulo}
                cliente={ing.cliente}
                cpf={ing.cpf}
                assento={ing.assento}
                pagamento={ing.pagamento}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Ingressos