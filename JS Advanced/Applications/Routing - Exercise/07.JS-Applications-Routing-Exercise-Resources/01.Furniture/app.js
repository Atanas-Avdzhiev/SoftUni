import page from "./node_modules/page/page.mjs";
import { navigation } from "./src/navigationView.js";
import { register } from "./src/register.js";
import { login } from "./src/login.js";
import { logout } from "./src/logout.js";
import { loadAllFurniture } from "./src/home.js";
import { details } from "./src/details.js";
import { create } from "./src/create.js";
import { edit } from "./src/edit.js";
import { myFurniture } from "./src/my-furniture.js";

page(navigation);

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