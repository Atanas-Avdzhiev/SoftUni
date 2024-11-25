import page from "../node_modules/page/page.mjs";

export async function logout() {
    const logoutURL = 'http://localhost:3030/users/logout';
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    const accessToken = userData.accessToken;

    const res = await fetch(logoutURL, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken
        }
    });
    if(res.status === 204){
        localStorage.clear();
        page.redirect('/');
    }
    else{
        localStorage.clear();
        window.alert(res.statusText);
    }
}