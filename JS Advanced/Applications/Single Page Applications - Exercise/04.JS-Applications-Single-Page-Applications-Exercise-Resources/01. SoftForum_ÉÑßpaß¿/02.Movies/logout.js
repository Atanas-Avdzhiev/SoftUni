import { topNavigation } from "./home.js";

export async function logout() {
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';

    const logoutURL = 'http://localhost:3030/users/logout';
    const accessToken = localStorage.getItem('accessToken');

    const res = await fetch(logoutURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })
    localStorage.clear();
    // divToAttachUl.innerHTML = '';

    const loginView = document.querySelector('#form-login');
    const allViewSections = document.querySelectorAll('.view-section');
    allViewSections.forEach(section => {
        section.style.display = 'none';
    })
    loginView.style.display = 'block';
    topNavigation();
}