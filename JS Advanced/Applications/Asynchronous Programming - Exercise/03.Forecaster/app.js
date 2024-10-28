async function attachEvents() {
    const getWeatherButton = document.querySelector('#submit');
    const inputValue = document.querySelector('#location');
    const divCurrent = document.querySelector('#current');
    const divForecast = document.querySelector('#forecast');
    const divUpcoming = document.querySelector('#upcoming');


    getWeatherButton.addEventListener('click', async () => {
        divCurrent.innerHTML = '';
        divUpcoming.innerHTML = '';
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';

        const res = await fetch(url);
        const data = await res.json();
        const weatherInfo = data.find(weather => weather.name === inputValue.value);


        const currentConditionsURL = `http://localhost:3030/jsonstore/forecaster/today/${weatherInfo.code}`;
        const resCurrentCondition = await fetch(currentConditionsURL);
        const dataCurrentCondition = await resCurrentCondition.json();

        const forecastConditionsURL = `http://localhost:3030/jsonstore/forecaster/upcoming/${weatherInfo.code}`;
        const resforecastCondition = await fetch(forecastConditionsURL);
        const dataForecastCondition = await resforecastCondition.json();

        const divForecasts = document.createElement('div');
        divForecasts.setAttribute('class', 'forecasts');

        const spanLocation = document.createElement('span');
        spanLocation.setAttribute('class', 'condition symbol');
        let condition = '';
        switch (dataCurrentCondition.forecast.condition) {
            case 'Sunny': condition = '\u2600';
                break;
            case 'Partly sunny': condition = '\u26C5';
                break;
            case 'Overcast': condition = '\u2601';
                break;
            case 'Rain': condition = '\u2614';
                break;
            case 'Degrees': condition = '\u00B0';
                break;
        }
        spanLocation.textContent = `${condition}`;

        const spanContainer = document.createElement('span');
        spanContainer.setAttribute('class', 'condition');

        const spanCity = document.createElement('span');
        spanCity.setAttribute('class', 'forecast-data');
        spanCity.textContent = `${dataCurrentCondition.name}`;

        const spanTemp = document.createElement('span');
        spanTemp.setAttribute('class', 'forecast-data');
        spanTemp.textContent = `${dataCurrentCondition.forecast.low}\u00B0/${dataCurrentCondition.forecast.high}\u00B0`;

        const spanCondition = document.createElement('span');
        spanCondition.setAttribute('class', 'forecast-data');
        spanCondition.textContent = `${dataCurrentCondition.forecast.condition}`;

        spanContainer.appendChild(spanCity);
        spanContainer.appendChild(spanTemp);
        spanContainer.appendChild(spanCondition);

        divForecasts.appendChild(spanLocation);
        divForecasts.appendChild(spanContainer);

        divCurrent.appendChild(divForecasts);
        divForecast.style.display = 'block';

        const divForecastInfo = document.createElement('div');
        divForecastInfo.setAttribute('class', 'forecast-info');

        dataForecastCondition.forecast.forEach(forecast => {

            const spanUpcoming = document.createElement('span');
            spanUpcoming.setAttribute('class', 'upcoming');

            const spanSymbol = document.createElement('span');
            spanSymbol.setAttribute('class', 'symbol');
            let conditionForecast = '';

            switch (forecast.condition) {
                case 'Sunny': conditionForecast = '\u2600';
                    break;
                case 'Partly sunny': conditionForecast = '\u26C5';
                    break;
                case 'Overcast': conditionForecast = '\u2601';
                    break;
                case 'Rain': conditionForecast = '\u2614';
                    break;
                case 'Degrees': conditionForecast = '\u00B0';
                    break;
            }

            spanSymbol.textContent = `${conditionForecast}`;

            const spanTempForecast = document.createElement('span');
            spanTempForecast.setAttribute('class', 'forecast-data');
            spanTempForecast.textContent = `${forecast.low}\u00B0/${forecast.high}\u00B0`;

            const spanConditionForecast = document.createElement('span');
            spanConditionForecast.setAttribute('class', 'forecast-data');
            spanConditionForecast.textContent = `${forecast.condition}`;

            spanUpcoming.appendChild(spanSymbol);
            spanUpcoming.appendChild(spanTempForecast);
            spanUpcoming.appendChild(spanConditionForecast);

            divForecastInfo.appendChild(spanUpcoming);

        })

        divUpcoming.appendChild(divForecastInfo);
    })
}
attachEvents();