import Banner from "components/Banner/Banner";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Card from "components/Card/Card";
import Rodape from "components/Rodape/Rodape";
import Titulo from "components/Titulo/Titulo";
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um ligar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            <Rodape />
        </>
    )
}

export default Inicio;  