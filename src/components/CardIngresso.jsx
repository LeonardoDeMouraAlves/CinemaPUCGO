import React from 'react'

const CardIngresso = ({ filme, cliente, cpf, assento, pagamento }) => (
  <div className="col-md-12 card p-3 mb-3">
    <strong>Filme:</strong> {filme}<br />
    <strong>Cliente:</strong> {cliente}<br />
    <strong>CPF:</strong> {cpf}<br />
    <strong>Assento:</strong> {assento}<br />
    <strong>Pagamento:</strong> {pagamento}<br />
  </div>
)

export default CardIngresso