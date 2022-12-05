import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./components/pages/Inicio"
import Sobre from "./components/pages/Sobre"
import Doacao from "./components/pages/Doacao"
import Produtos from "./components/pages/Produtos"
import Contato from "./components/pages/Contato"
import NavBar from "./components/layout/NavBar"
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"

function App(){
    return(
        <Router>
            <NavBar />

            <Container customClass="min_height">
                <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/doacao" element={<Doacao />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/contato" element={<Contato />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}
export default App