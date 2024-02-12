import React, { useState } from 'react';
import './Wheathercss.css'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import colud from './wicon/w1.jpg';
import sun from './wicon/w22.jpg';
import rain from './wicon/w10.jpg';
import bsun from './wicon/w3.jpg'
import rainbo from './wicon/w9.jpg';
import hrain from './wicon/w7.jpg';


function Wheatherapp() {
    const [wicon,setWicon] = useState(colud)
   const api_key="8e7ae329c62c1072bd1a92a2d9d562d1";
   const search = async() =>{
      const element = document.getElementsByClassName('city')
      if(element[0].value===""){
        return 0;   
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
      let resp = await fetch(url)
      let data =await resp.json();
      const humidity = document.getElementsByClassName("humidity-persent")
      const wind  = document.getElementsByClassName("wind-rate");
      const temp = document.getElementsByClassName("temp");
      const location = document.getElementsByClassName("location");

      humidity[0].innerHTML = data.main.humidity+"%";
      wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
      temp[0].innerHTML = Math.floor(data.main.temp)+"°C";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
        setWicon(sun)
      }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon(bsun)
      }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
        setWicon(bsun)
      }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
        setWicon()
      }else if(data.weather[0].icon==="05d" || data.weather[0].icon==="05n"){
        setWicon(rainbo)
      }else if(data.weather[0].icon==="06d" || data.weather[0].icon==="06n"){
        setWicon(rainbo)
      }else if(data.weather[0].icon==="07d" || data.weather[0].icon==="07n"){
        setWicon(rain)
      }else if(data.weather[0].icon==="08d" || data.weather[0].icon==="08n"){
        setWicon(rain)
      }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        setWicon(hrain)
      }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        setWicon(hrain)
      }else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n"){
        setWicon(bsun)
      }else if(data.weather[0].icon==="12d" || data.weather[0].icon==="12n"){
        setWicon(bsun)
      }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        setWicon(bsun)
      }else if(data.weather[0].icon==="14d" || data.weather[0].icon==="14n"){
        setWicon(rainbo)
      }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon(rainbo)
      }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon(bsun)
      }
   }
  return (
    <div className='container'>
        <div className='top-bar'>
           <input type='text' name='city' className='city' placeholder='search your city'  />
           <div  className='icon' onClick={()=>{search()}} >
           <SearchIcon/>
           </div>
        </div>
        {/* InputProps={{
            endAdornment:<InputAdornment position='end'><SearchIcon /></InputAdornment>
        }} */}
        <div className='images'>
            <img  src='image/w1.jpg' height={180} style={{margin:'30px 200px',borderRadius:'20px'}}/>
        </div>
        <div className='temp'>24°C</div>
        <div className='location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src='image/w18.jpg' className='image' />
                <div className='data'>
                    <div className='humidity-persent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src='image/w17.jpg' className='image' />
                <div className='data'>
                    <div className='wind-rate'>18 km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wheatherapp
