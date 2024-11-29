import page from "../node_modules/page/page.mjs";
import { logout } from "../api/api.js";

export async function logoutView() {

    const response = await logout();

    if (response.status === 204) {
        localStorage.clear();
        page.redirect('/');
    }
    else {
        localStorage.clear();
        window.alert(res.statusText);
    }
}