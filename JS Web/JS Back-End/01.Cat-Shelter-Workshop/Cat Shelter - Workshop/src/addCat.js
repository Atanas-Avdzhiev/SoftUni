document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const formData = Object.fromEntries(form);

    const res = await fetch('http://localhost:5000/addNewCat', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
    });
    location.href = '/';
    // const data = await res.json();
});