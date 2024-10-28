function getInfo() {
    const stopID = document.querySelector('#stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;
    const divStopName = document.querySelector('#stopName');
    const ulBuses = document.querySelector('#buses');

    fetch(url)
        .then(data => data.json())
        .then(x => {
            ulBuses.innerHTML = '';
            divStopName.textContent = x.name;

            for (const bus in x.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${x.buses[bus]} minutes`;
                ulBuses.appendChild(li);
            }
        })
        .catch(err => {
            divStopName.textContent = 'Error';
            ulBuses.innerHTML = '';
        });
}