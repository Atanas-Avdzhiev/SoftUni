import page from "//unpkg.com/page/page.mjs";

import homePage from "./views/home.js";
import createPage from "./views/create.js";
import catalogPage from "./views/catalog.js";
import loginPage from "./views/login.js";
import logoutPage from "./views/logout.js";
import registerPage from "./views/register.js";
import { renderNavigation } from "./views/navigation.js";
import detailsPage from "./views/details.js";

// This will execute before each navigation
page(renderNavigation);

// Execute by route
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:recipeId', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/logout', logoutPage);

// Start router
page();
