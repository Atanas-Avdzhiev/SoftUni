document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name').value;
    const breedInput = document.querySelector('#group').value;
    const descriptionInput = document.querySelector('#description').value;
    const imageInput = document.querySelector('#image').value;

    const url = new URL(location.href);
    const catId = url.pathname.split('=')[1];

    const res = await fetch('http://localhost:5000/editExistingCat', {
        method: 'PUT',
        body: JSON.stringify({
            "id": catId,
            "image": imageInput,
            "name": nameInput,
            "breed": breedInput,
            "description": descriptionInput
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    location.href = '/';
    //const data = await res.json();
});