function solve() {

    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    const info = document.querySelector('.info');
    let nextURL = 'depot';
    let currentStop = '';

    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextURL}`;

        fetch(url)
            .then(data => data.json())
            .then(x => {
                currentStop = x.name;
                info.textContent = `Next stop ${x.name}`;
                nextURL = `${x.next}`;
            })
            .catch(err => {
                info.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    function arrive() {
        arriveButton.disabled = true;
        departButton.disabled = false;
        info.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();