import page from "./node_modules/page/page.mjs";
import { homeView } from "./src/home.js";
import { navigationView } from "./src/navigation.js";
import { registerView } from "./src/register.js";
import { loginView } from "./src/login.js";
import { logout } from "./src/logout.js";
import { marketView } from "./src/marketView.js";
import { create } from "./src/create.js";
import { showDetails } from "./src/details.js";
import { editDetails } from "./src/edit.js";
import { deleteItem } from "./src/delete.js";

page(navigationView);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logout);
page('/market', marketView);
page('/create', create);
page('/market/:itemId', showDetails);
page('/market/:itemId/edit', editDetails);
page('/market/:itemId/delete', deleteItem);

page();