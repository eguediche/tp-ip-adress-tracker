const btn = document.querySelector("#inputImage");
const input = document.querySelector("#inputNumber");

const ipAddress = document.querySelector("#ipAddress");
const ipLocation = document.querySelector("#ipLocation");
const ipTimeZone = document.querySelector("#ipTimeZone");
const ipIsp = document.querySelector("#ipIsp");

let map = L.map('map').setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        caca();
    }
}) 


btn.addEventListener("click", () => {
    caca();
})


function caca () {

async function main() {
    const data = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_wqy9tUA1kyah20Z1MtTJNwG5csGTi&ipAddress=" + input.value, {
        method: "GET",
    });
    const result = await data.json();
    marker.remove(marker);
    marker = L.marker([result.location.lat, result.location.lng]).addTo(map)
    ipAddress.textContent = result.ip;
    ipLocation.textContent = result.location.city + ", " + result.location.country + " " + result.location.postalCode;
    ipTimeZone.textContent = "UTC " + result.location.timezone;
    ipIsp.textContent = result.isp
    map.setView([result.location.lat, result.location.lng], 13);
}

main();


 }