import styles from './Location.module.css'

export default function Location({city, country}){
    return(
        <p className={styles.location}>{city} - {country}</p>
    )
}