import {useState}from 'react';
const App = () => {

const [lat, setLat] = useState(0)
const [long, setLong] = useState(0)
const [hemisphere, setHemisphere] = useState('')
const [month, setMonth] = useState('')

function GetCurrentLocation(){
  navigator.geolocation.getCurrentPosition((position) => {
    let {latitude , longitude} = position.coords
    setLat(latitude)  
    setLong(longitude)      
    
  })
  if(lat > 0) {
    setHemisphere('Northern Hemisphere')
  }
  else if(lat<0){

    setHemisphere('Southern Hemisphere')
}
  else {
    setHemisphere ('equator')

  }

  let date=new Date()
  let currentMonth=date.getMonth()
  setMonth(currentMonth)

}


return(

<div>
<h1>Latitude: {lat} Longitude : {long} </h1>
<h1>Hemisphere : {hemisphere} </h1>
<h1>Month : {month} </h1>

<button onClick={GetCurrentLocation}>Get Current Location</button>

</div>
)


}


export default App;
