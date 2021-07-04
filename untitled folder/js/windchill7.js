function tempSpeed() {
    document.querySelector("#high").innerHTML = 45;
    document.querySelector("#WindSpeed").innerHTML = 7;        
    let temp = document.getElementById("high").innerHTML;
    let windspeed = document.getElementById("WindSpeed").innerHTML;

    let currentChill = windChill(temp, windspeed);

    document.querySelector('#windChill').textContent = currentChill;
}
function windChill(t, s) {

    if (t <= 50 && s > 3) {
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

        return f.toFixed(1);
    } else {
        let f = "N/A";

        return f;
    }
}