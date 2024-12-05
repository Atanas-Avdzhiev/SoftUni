import page from "../node_modules/page/page.mjs";
import { deleting } from "../api/api.js";

export async function deleteView() {
    const id = this._id;

    if (!confirm('Are you sure you want to delete this item?')) {   //check if validations are the same
        page.redirect(`/dashboard/${id}`);
        return;
    }

    const response = await deleting(id);

    if (response._deletedOn) {
        page.redirect('/dashboard');
    }
}