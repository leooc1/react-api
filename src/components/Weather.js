import styles from './Weather.module.css'

export default function Weather({clima, icon}){
    return (
        <div className={styles.weatherContainer}>
            <img src={icon} alt='Clima'/>
            <p>{clima}</p>
        </div>
    )
}