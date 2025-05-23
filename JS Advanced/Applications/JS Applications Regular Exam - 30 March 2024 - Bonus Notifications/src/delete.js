import page from "../node_modules/page/page.mjs";

export async function deleteItem(ctx) {
    const { itemId } = ctx.params;
    if (!confirm('Are you sure you want to delete this item?')) {
        page.redirect(`/market/${itemId}`);
        return;
    }
    const deleteURL = `http://localhost:3030/data/cyberpunk/${itemId}`;

    const userData = JSON.parse(localStorage.getItem('userData'));
    const accessToken = userData.accessToken;

    const res = await fetch(deleteURL, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    });
    const data = await res.json();
    if (data._deletedOn) {
        page.redirect('/market');
    }
    else {
        window.alert(data.message);
    }
}