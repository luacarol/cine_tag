import Banner from 'components/Banner/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo/Titulo';
import Card from 'components/Card/Card';

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="1" titulo="Gato bonifácio" capa="https://thecatapi.com/api/images/get?format=src&type=png" ></Card>
            </section>
        </>
    )
}

export default Favoritos;