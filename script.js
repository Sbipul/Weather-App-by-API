const searchWeather = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;

    if (input.value == '') {
        alert('Empty search can\'t access');
    } else {
        const spinner = document.getElementById('spinner');
        spinner.classList.remove('d-none');
        input.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ffe73ad0c5d8f5354d8733a6d89ce4c4`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data));
            spinner.classList.add('d-none');
    }


}
const under15 = document.getElementById('under15');
const under25 = document.getElementById('under25');
const upto25 = document.getElementById('upto25');
const displayWeather = weather => {


    const wContainer = document.getElementById('wContainer');
    wContainer.textContent = '';
    const div = document.createElement('div');

    const temp = parseFloat(`${weather.main.temp}`) - 273;
    const finalTemp = temp.toFixed(1);

    div.innerHTML = `
        <h2>City name : ${weather.name}</h2>
        <h3>Temparature : ${finalTemp} degree celceous</h3>
        <h3>Wind Speed : ${weather.wind.speed} km/h</h3>
       `

    if (finalTemp <= 15) {
        under15.classList.remove('d-none');
        under25.classList.add('d-none');
        upto25.classList.add('d-none');
    } else if (finalTemp <= 25) {
        under15.classList.add('d-none');
        under25.classList.remove('d-none');
        upto25.classList.add('d-none');;
    } else {
        under15.classList.add('d-none');
        under25.classList.add('d-none');
        upto25.classList.remove('d-none');
    }

    wContainer.appendChild(div);
}









// function loader() {
//     const spinner = document.getElementById('spinner');
//     spinner.classList.remove('d-none');
//     const intrvl = setInterval(() => {
//         searchWeather();
//         spinner.classList.add('d-none');
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(intrvl);
//     }, 3000);

// }