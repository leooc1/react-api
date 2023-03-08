import styles from './Wind.module.css'

export default function Wind({vel, hum}){
    return(
        <div className={styles.wind_Container}>
            <p>Velocidade do vento: <span>{vel}km/h</span></p>
            <p>Humidade: <span>{hum}%</span></p>
        </div>
    )
}