import style from './Temperature.module.css'

export default function Temperature({temp, sens}){
    return(
        <div className={style.temp_Container}>
            <p>Temperatura: <span>{temp}°C</span></p>
            <p>Sensação térmica: <span>{sens}°C</span></p>
        </div>
    )
}