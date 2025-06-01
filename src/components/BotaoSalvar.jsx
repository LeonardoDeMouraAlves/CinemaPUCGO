import React from 'react'

const BotaoSalvar = ({ texto = 'Salvar', icone = 'check-circle' }) => (
  <button type="submit" className="btn btn-success">
    <i className={`bi bi-${icone}`}></i> {texto}
  </button>
)

export default BotaoSalvar