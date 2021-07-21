/*const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5549225&appid=6cb6efbc5628616ae948fd81c0a5bd69';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        ftemp = Math.round((jsObject.main.temp - 273.15) * (9/5) + 32)
        document.getElementById('currently').textContent = ftemp;
        fhigh = Math.round((jsObject.main.temp_max - 273.15) * (9/5) + 32)
        document.getElementById('high').textContent = fhigh;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('WindSpeed').textContent = jsObject.wind.speed;

        let currentChill = windChill(ftemp, jsObject.wind.speed);

        document.querySelector('#windChill').textContent = currentChill;

    });*/

const days = ["1", "2", "3", "4", "5"];
const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6cb6efbc5628616ae948fd81c0a5bd69';
fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const nextfive = jsObject.list.filter(dt => dt.dt_txt.includes('18:00:00'));
        i = 0
        nextfive.forEach(day => {
            
            let forcast = new Date(day.dt_txt);
            dayOfWeek = days[i];
            document.getElementById(dayOfWeek).textContent = dayNames[forcast.getDay()];
            ftemp = Math.round((day.main.temp - 273.15) * (9/5) + 32);
            document.getElementById("temp" + days[i]).textContent = ftemp;
            
            document.getElementById("pic" + days[i]).setAttribute('src', 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png');
            document.getElementById("pic" + days[i]).setAttribute('alt', day.weather[0].main);
            i++
        })
    })
        
        /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);*/



    function windChill(t, s) {

        if (t <= 50 && s > 3) {
            let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    
            return f.toFixed(1);
        } else {
            let f = "N/A";
    
            return f;
        }
    }
    