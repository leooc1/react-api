import { useState, useEffect } from 'react'
import Input from './components/Input'
import Loading from './components/Loading'
import Weather from './components/Weather'
import Location from './components/Location'
import Temperature from './components/Temperature'
import Wind from './components/Wind'
import Container from './components/Container'
import Card from './components/Card'
import Error from './components/Error'
import Default from './components/Default'
import styles from './App.module.css'

function App() {

  const [location, setLocation] = useState('')
  const APIkey = '4286c7e8bf2cf35ba23782a3ca4cdf7d'

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lat=-21.017507&lon=-42.837470&units=metric&lang=pt_br&exclude=hourly,daily&appid=${APIkey}`);
        const data = await res.json();
        setData(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [location]);


  function searchLocation(e) {
    let local = document.getElementById('location')
    e.preventDefault()
    if (local.value !== '') {
      setLocation(local.value)
    }
    else { }
  }

  const imagens = {
    '01d': require('./img/weather/01d.png'),
    '01n': require('./img/weather/01n.png'),
    '02d': require('./img/weather/02d.png'),
    '02n': require('./img/weather/02n.png'),
    '03d': require('./img/weather/03d.png'),
    '03n': require('./img/weather/03n.png'),
    '04d': require('./img/weather/04d.png'),
    '04n': require('./img/weather/04n.png'),
    '09d': require('./img/weather/09d.png'),
    '09n': require('./img/weather/09n.png'),
    '10d': require('./img/weather/10d.png'),
    '10n': require('./img/weather/10n.png'),
    '11d': require('./img/weather/11d.png'),
    '11n': require('./img/weather/11n.png'),
    '13d': require('./img/weather/13d.png'),
    '13n': require('./img/weather/13n.png'),
    '50d': require('./img/weather/50d.png'),
    '50n': require('./img/weather/50n.png'),
  }

  if (loading) {
    return <Loading />
  }
  else {
    if (data.cod === '404') {
      return (
        <main className={styles.mainContainer}>
          <Input searchLocation={searchLocation} />
          <Card>
            <Error />
          </Card>
        </main>
      )
    }

    else {
      if (location === '') {
        return (
          <main className={styles.mainContainer}>
            <Input searchLocation={searchLocation} />
            <Card>
              <Default />
            </Card>
          </main>
        )
      }
      else {
        return (
          <main className={styles.mainContainer}> 
            <Input searchLocation={searchLocation} />
            <Card>
              <Location city={data.name} country={data.sys.country} />
              <Container>
                <Temperature temp={Number(data.main.temp).toFixed(1)} sens={Number(data.main.feels_like).toFixed(1)} />
                <Weather clima={data.weather[0].description} icon={imagens[data.weather[0].icon]} />
                <Wind vel={(Number(data.wind.speed) * 3.6).toFixed(1)} hum={data.main.humidity} />
              </Container>
            </Card>
          </main>
        );
      }
    }
  }
}

export default App;
