import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Rodape from "components/Rodape/Rodape";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Favoritos" element={<Favoritos />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;