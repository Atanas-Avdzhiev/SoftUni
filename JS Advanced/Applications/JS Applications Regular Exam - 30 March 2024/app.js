import page from "./node_modules/page/page.mjs";
import { homeView } from "./src/home.js";
import { navigationView } from "./src/navigation.js";
import { registerView } from "./src/register.js";
import { loginView } from "./src/login.js";
import { logout } from "./src/logout.js";
import { marketView } from "./src/marketView.js";
import { create } from "./src/create.js";

navigationView();
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logout);
page('/market', marketView);
page('/create', create);

page();