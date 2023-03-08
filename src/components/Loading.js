import styles from './Loading.module.css'
import load from '../img/loading/loading.svg'

export default function Loading() {
    return (
        <div className={styles.loading_container}>
            <img  src={load} alt='Carregando Dados' /> 
        </div>
    )
}