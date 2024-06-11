import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Rodape from "components/Rodape/Rodape";
import Container from "components/Container/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from './pages/PaginaBase/';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase></PaginaBase>}></Route>
                <Route index element={<Inicio />}></Route>
                <Route path="favoritos" element={<Favoritos />}></Route>
                <Route path=":id" element={<Player />}></Route>
                <Route path="*" element={<NaoEncontrada />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;