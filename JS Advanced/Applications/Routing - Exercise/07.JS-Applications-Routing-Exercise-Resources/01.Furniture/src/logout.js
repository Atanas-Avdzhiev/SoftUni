import page from "../node_modules/page/page.mjs";

const logoutURL = 'http://localhost:3030/users/logout';

export async function logout() {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const accessToken = userData.accessToken;

    const res = await fetch(logoutURL, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken,
        }
    });
    localStorage.clear();
    page.redirect('/dashboard');
}