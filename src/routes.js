import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Rodape from "components/Rodape/Rodape";
import Container from "components/Container/Container";
import FavoritosProvider from "contextos/Favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;