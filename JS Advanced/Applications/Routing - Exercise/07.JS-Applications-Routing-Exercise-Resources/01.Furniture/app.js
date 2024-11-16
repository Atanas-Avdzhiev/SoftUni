import page from "./node_modules/page/page.mjs";
//import { navigation } from "./src/navigationView.js";
import { register } from "./src/register.js";
import { login } from "./src/login.js";
import { logout } from "./src/logout.js";
import { loadAllFurniture } from "./src/home.js";
import { details } from "./src/details.js";
import { create } from "./src/create.js";
import { edit } from "./src/edit.js";
import { myFurniture } from "./src/my-furniture.js";

//page(navigation);

export function navigation(ctx, next) {
    //const userData = localStorage.getItem('userData');
    //render(template(userData), body);

    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');
    //console.log(sessionStorage.getItem('userData'))

    if (localStorage.getItem('userData') == null) {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
    else {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    }
    //next();
}
navigation();
page('/', loadAllFurniture);
page('/register', register);
page('/login', login);
page('/logout', logout);
page('/dashboard', loadAllFurniture);
page('/dashboard/:furnitureID', details);
page('/create', create);
page('/dashboard/:furnitureID/edit', edit);
page('/my-furniture', myFurniture);

page();