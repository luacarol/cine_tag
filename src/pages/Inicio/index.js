import Banner from "components/Banner/Banner";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Rodape from "components/Rodape/Rodape";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home"/>
            <Rodape />
        </>
    )
}

export default Inicio;  