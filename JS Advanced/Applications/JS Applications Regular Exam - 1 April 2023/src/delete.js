import page from "../node_modules/page/page.mjs";
import { deleting } from "../api/api.js";

export async function deleteView(ctx) {
    const { id } = ctx.params;

    const confirmed = confirm('Are you sure you want to delete this item?');

    if (confirmed) {
        await deleting(id);
        page.redirect('/dashboard');
    }
}