const divCatches = document.querySelector('#catches');
divCatches.innerHTML = '';

const loadButton = document.querySelector('.load');

function logoutNavigation() {

    if (!localStorage.getItem('_id')) {
        const logoutButton = document.querySelector('#logout');
        logoutButton.style.display = 'none';
        return;
    }

    const loginButton = document.querySelector('#login');
    const registerButton = document.querySelector('#register');
    const welcomeGuest = document.querySelector('body header nav p span');
    welcomeGuest.textContent = localStorage.getItem('email');

    loginButton.style.display = 'none';
    registerButton.style.display = 'none';

    const logoutButton = document.querySelector('#logout');
    try {
        logoutButton.addEventListener('click', async () => {
            if (!localStorage.getItem('_id')) {
                return;
            }
            const logoutURL = 'http://localhost:3030/users/logout';
            const accessToken = localStorage.getItem('accessToken');

            const res = await fetch(logoutURL, {
                method: 'GET',
                headers: {
                    'X-Authorization': accessToken
                }
            });
            localStorage.clear();
            window.location = '/src/index.html';
        })
    }
    catch (err) {
        alert(err.message);
    }
}
logoutNavigation();

function listCatches() {

    loadButton.addEventListener('click', async () => {
        divCatches.innerHTML = '';
        const loadURL = 'http://localhost:3030/data/catches';
        const res = await fetch(loadURL);
        const data = await res.json();

        data.forEach(_catch => {
            const divCatch = createCatch(_catch);
            divCatches.appendChild(divCatch);
        })
    })

    function createCatch(_catch) {

        const divCatch = document.createElement('div');
        divCatch.className = 'catch';

        const anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';

        const anglerInput = document.createElement('input');
        anglerInput.type = 'text';
        anglerInput.className = 'angler';
        anglerInput.value = _catch.angler;

        const weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';

        const weightInput = document.createElement('input');
        weightInput.type = 'text';
        weightInput.className = 'weight';
        weightInput.value = _catch.weight;

        const speciesLabel = document.createElement('label');
        speciesLabel.textContent = 'Species';

        const speciesInput = document.createElement('input');
        speciesInput.type = 'text';
        speciesInput.className = 'species';
        speciesInput.value = _catch.species;

        const locationLabel = document.createElement('label');
        locationLabel.textContent = 'Location';

        const locationInput = document.createElement('input');
        locationInput.type = 'text';
        locationInput.className = 'location';
        locationInput.value = _catch.location;

        const baitLabel = document.createElement('label');
        baitLabel.textContent = 'Bait';

        const baitInput = document.createElement('input');
        baitInput.type = 'text';
        baitInput.className = 'bait';
        baitInput.value = _catch.bait;

        const captureTimeLabel = document.createElement('label');
        captureTimeLabel.textContent = 'Capture Time';

        const captureTimeInput = document.createElement('input');
        captureTimeInput.type = 'number';
        captureTimeInput.className = 'captureTime';
        captureTimeInput.value = _catch.captureTime;

        const updateButton = document.createElement('button');
        updateButton.className = 'update';
        updateButton.setAttribute('data-id', _catch._id);
        updateButton.textContent = 'Update';

        updateButton.addEventListener('click', async (e) => {
            const updateURL = `http://localhost:3030/data/catches/${_catch._id}`;

            const mainDiv = e.currentTarget.parentElement;
            const anglerValue = mainDiv.querySelector('.angler').value;
            const weightValue = mainDiv.querySelector('.weight').value;
            const speciesValue = mainDiv.querySelector('.species').value;
            const locationValue = mainDiv.querySelector('.location').value;
            const baitValue = mainDiv.querySelector('.bait').value;
            const captureTimeValue = mainDiv.querySelector('.captureTime').value;

            const accessToken = localStorage.getItem('accessToken');
            try {
                const res = await fetch(updateURL, {
                    method: 'PUT',
                    body: JSON.stringify({
                        angler: anglerValue,
                        weight: weightValue,
                        species: speciesValue,
                        location: locationValue,
                        bait: baitValue,
                        captureTime: captureTimeValue
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': accessToken
                    }

                })

                const data = await res.json();
                window.location = '/src/index.html';

            }
            catch (err) {
                alert(err.message);
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.setAttribute('data-id', _catch._id);
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', async (e) => {
            const deleteURL = `http://localhost:3030/data/catches/${_catch._id}`;
            const accessToken = localStorage.getItem('accessToken');

            const res = await fetch(deleteURL, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': accessToken
                }
            })
            const data = await res.json();
            window.location = '/src/index.html';
        });

        const ownerId = localStorage.getItem('_id');

        if (!(ownerId && _catch._ownerId === ownerId)) {
            updateButton.disabled = true;
            deleteButton.disabled = true;
        }

        divCatch.appendChild(anglerLabel);
        divCatch.appendChild(anglerInput);
        divCatch.appendChild(weightLabel);
        divCatch.appendChild(weightInput);
        divCatch.appendChild(speciesLabel);
        divCatch.appendChild(speciesInput);
        divCatch.appendChild(locationLabel);
        divCatch.appendChild(locationInput);
        divCatch.appendChild(baitLabel);
        divCatch.appendChild(baitInput);
        divCatch.appendChild(captureTimeLabel);
        divCatch.appendChild(captureTimeInput);
        divCatch.appendChild(updateButton);
        divCatch.appendChild(deleteButton);

        return divCatch;
    }

}
listCatches()

function addCatch() {

    if (!localStorage.getItem('_id')) {
        const logoutButton = document.querySelector('#logout');
        logoutButton.style.display = 'none';
        return;
    }

    const addButton = document.querySelector('.add');
    addButton.disabled = false;

    const form = document.querySelector('#addForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formArray = Object.fromEntries(formData);
        const createCatchURL = 'http://localhost:3030/data/catches';
        const accessToken = localStorage.getItem('accessToken');

        if (formArray.angler === '' || formArray.weight === '' ||
            formArray.species === '' || formArray.location === '' ||
            formArray.bait === '' || formArray.captureTime === '') {
            return;
        }

        try {
            const res = await fetch(createCatchURL, {
                method: 'POST',
                body: JSON.stringify({
                    angler: formArray.angler,
                    weight: formArray.weight,
                    species: formArray.species,
                    location: formArray.location,
                    bait: formArray.bait,
                    captureTime: formArray.captureTime
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken
                }
            })

            const data = await res.json();
            form.reset();
            window.location = '/src/index.html';
        }
        catch (err) {
            alert(err.message);
        }
    })
}
addCatch()