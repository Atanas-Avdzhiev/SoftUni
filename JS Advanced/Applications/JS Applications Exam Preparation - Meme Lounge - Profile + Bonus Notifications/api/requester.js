export const request = async (method, url, data) => {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const notification = document.querySelector('.notification');

    let requestOptions = {};

    if (data) {
        requestOptions.headers = {
            'Content-Type': 'application/json'
        };
        requestOptions.body = JSON.stringify(data);
    }

    // note that the accessToken will pobably be added to all requests cases in which userData exists, even in cases where accessToken is not needed, but probably that wont be a problem
    if (userData && requestOptions.headers) {
        requestOptions.headers['X-Authorization'] = userData.accessToken;
    }
    else if (userData) {
        requestOptions.headers = { 'X-Authorization': userData.accessToken };
    }

    if (method !== 'GET') {
        requestOptions.method = method;
    }

    try {

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            const data = await response.json();

            notification.style.display = 'block';
            notification.querySelector('span').textContent = data.message;
            setTimeout(() => {
                notification.querySelector('span').textContent = 'MESSAGE';
                notification.style.display = 'none';
            }, 3000);

            return;
        }

        if (response.status === 204) {
            return response; // in case of logout because parsing to json will give error
        }

        return await response.json();

    }
    catch (err) {
        alert(err.message);
    }
}