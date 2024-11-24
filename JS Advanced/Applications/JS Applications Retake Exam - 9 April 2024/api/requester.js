export const request = async (method, url, data) => {

    const userData = JSON.parse(localStorage.getItem('userData'));

    let result;
    let requestOptions = {};

    if (data) {
        requestOptions.headers = {
            'Content-Type': 'application/json'
        };
        requestOptions.body = JSON.stringify(data);
    }

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

        if (response.status === 204) {
            return response; // in case of logout because parsing to json will give error
        }

        result = await response.json();

    }
    catch (err) {
        alert(err.message);
    }

    return result;
}