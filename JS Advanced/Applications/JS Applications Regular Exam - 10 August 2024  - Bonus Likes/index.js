import page from "./node_modules/page/page.mjs";
import { homeView } from "./src/home.js";
import { navigation } from "./src/navigation.js";
import { registerView } from "./src/register.js";
import { loginView } from "./src/login.js";
import { logoutView } from "./src/logout.js";
import { dashboardView } from "./src/dashboard.js";
import { createView } from "./src/create.js";
import { detailsView } from "./src/details.js";
import { editView } from "./src/edit.js";
import { deleteView } from "./src/delete.js";

page(navigation);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/dashboard/:id', detailsView);
page('/dashboard/:id/edit', editView);
page('/dashboard/:id/delete', deleteView);

page();