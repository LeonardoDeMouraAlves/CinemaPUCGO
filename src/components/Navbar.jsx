import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/"><i className="bi bi-camera-reels"></i> Cinema PUCGO</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/filmes"><i className="bi bi-film"></i> Filmes</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/salas"><i className="bi bi-tv"></i> Salas</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sessoes"><i className="bi bi-clock-history"></i> Sessões</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/venda"><i className="bi bi-ticket-perforated"></i> Venda</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ingressos"><i className="bi bi-person-check"></i> Ingressos</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sessoes-disponiveis"><i className="bi bi-calendar2-week"></i> Sessões Disponíveis</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
