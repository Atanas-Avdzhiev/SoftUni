export function logout() {

    const logoutURL = 'http://localhost:3030/users/logout';
    const accessToken = localStorage.getItem('accessToken');

    fetch(logoutURL, {
        method: 'POST',
        headers: {
            'X-Authorization': accessToken
        }
    })// The documentation says not to parse it to JSON or it will give an error!
        .then(res => {
            localStorage.clear(); // clearing everything inside the local storage
            location.href = '/';
        })
        .catch(err => alert(err.message));
}