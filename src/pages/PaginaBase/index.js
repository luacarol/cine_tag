const { default: Cabecalho } = require("components/Cabecalho/Cabecalho");
const { default: Container } = require("components/Container/Container");
const { default: Rodape } = require("components/Rodape/Rodape");
const { default: FavoritosProvider } = require("contextos/Favoritos");
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    return (
        <main>
            <Cabecalho></Cabecalho>
            <FavoritosProvider>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </FavoritosProvider>
            <Rodape></Rodape>
        </main>
    )
}

export default PaginaBase;