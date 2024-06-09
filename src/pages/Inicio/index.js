import Banner from "components/Banner/Banner";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Card from "components/Card/Card";
import Rodape from "components/Rodape/Rodape";
import Titulo from "components/Titulo/Titulo";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um ligar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id="1" titulo="Gato bonifácio" capa="https://thecatapi.com/api/images/get?format=src&type=png"/>
            <Rodape />
        </>
    )
}

export default Inicio;  