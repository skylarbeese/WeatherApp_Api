import React from 'react'
import './style.css'
const Api = {
  key: "2daebe6feda4bc18b4659a27a024c575",
  base: "http://api.openweathermap.org/data/2.5/"
}
function App() {
  const[query, setQuery] = React.useState('')
  const[weather, setWeather] = React.useState('')

  const search = (ev) => {
  if(ev.key === 'Enter') {
    
    //  if(query !== '' && query.toLowerCase().indexOf( query.toLowerCase() ) === -1) {
      ev.preventDefault()
        fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result)
          console.log(query)
        })
    //  }
   } 
  }

  const change = (e) => {
    setQuery(e.target.value)
  }

  const dateBuilder = (d) => {
    let months = ['january', 'february', 'march', 'april', 'may',
  'june', 'july', 'augest','september', 'october', 'novemder', 'december'
  ]
  let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday']
  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
  }
  return (
   
   
     <main className={(typeof weather.main !=  'undefined') ? ((weather.main.temp > 4) ?  'warm'
: 'cold') : 'con'}>
       <div className="search-bar-con">
         <input className="search-bar" 
         type="text" name="search" 
         onChange={change} 
         value={query}
         onKeyPress={search} 
         placeholder="search for a place"
         />
     
       </div>
     {(typeof weather.main !== 'undefined') ? 
       
       <div className="loc-con">
         <div className="location">
          
           <div className="loc">{weather.name}, {weather.sys.country}</div>
           <div className="date">{dateBuilder(new Date())}</div>
         </div>
         <div className="weather-con">
           <div className="weather-temp">
             {Math.round(weather.main.temp)} &#xb0; c
           </div>
       
           <div className="weather-descript">
             {weather.weather[0].description}
           </div>
          </div>
 
       </div>
 : (
  <div className="loc-con">
  <div className="location">
   
    <div className="loc"> Search for a city</div>
    <div className="date">{dateBuilder(new Date())}</div>
  </div>
  <div className="weather-con">
  

    <div className="weather-descript">
     
    </div>
   </div>

</div>
 )}
 
     </main>
   
  );
}

export default App;
