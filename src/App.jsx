import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Salas from './pages/Salas'
import Sessoes from './pages/Sessoes'
import Venda from './pages/Venda'
import Ingressos from './pages/Ingressos'
import SessoesDisponiveis from './pages/SessoesDisponiveis'

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/venda" element={<Venda />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/sessoes-disponiveis" element={<SessoesDisponiveis />} />
        </Routes>
      </div>
    </>
  )
}

export default App
