const api_key = 'bca2d79a46fc6304e61071d13c9ada5f'
const weatcherresult = document.getElementById('WitcherResult')
const getbuttonWeather = document.getElementById('getWeather')
const inputcity = document.getElementById('Icity')


getbuttonWeather.addEventListener('click', async () => {
    const city = inputcity.value.trim();
    if (!city){
        weatcherresult.innerHTML = '<p>введите правильное название города!</p>';
        return;
    } 

    try { 
        const responce = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=ru`);
        
        if (!responce.ok) throw new Error('ошибка,напишите правильное название города')
        const data = await responce.json();
        console.log(data);

        

        display(data);
    } catch (error) {
        weatcherresult.innerHTML =`<p>${error.message}</p>`;
    }
});

function display(data) {
    weatcherresult.innerHTML =`
        <h1>Погода в ${data.name}</h1>
        <p>Температура: ${data.main.temp}</p>
        <p>Min.Tемпература: ${data.main.temp_min}C</p>
        <p>Max.Tемпература: ${data.main.temp_max}C</p>
        <p>Ощущается как: ${data.main.feels_like}</p>
        <p>Скорость ветра: ${data.main.speed}m/sec</p>
        <p>Влажность: ${data.main.humidity} %</p>
        <p>Описание: ${data.weather[0].description}</p>
    `;
}
        