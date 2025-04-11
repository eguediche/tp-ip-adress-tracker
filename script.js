const btn = document.querySelector("#inputImage");
const input = document.querySelector("#inputNumber");

const ipAddress = document.querySelector("#ipAddress");
const ipLocation = document.querySelector("#ipLocation");
const ipTimeZone = document.querySelector("#ipTimeZone");
const ipIsp = document.querySelector("#ipIsp");

    let IP = input.value

input.addEventListener("input", () => {
    console.log(IP);
}) 


btn.addEventListener("click", () => {
    async function main() {
        const API = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_wqy9tUA1kyah20Z1MtTJNwG5csGTi&", {
            method: "GET",
            
        });
        const result = await API.json();
        console.log(result);
    }
    
    main();
})