if (!localStorage.getItem('_id')) {
    const logoutButton = document.querySelector('#logout');
    logoutButton.style.display = 'none';
}

const form = document.querySelector('body main form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataEntries = Object.fromEntries(formData);
    const registerURL = 'http://localhost:3030/users/register';

    if (formDataEntries.password !== formDataEntries.rePass) {
        alert('Password does not match!');
        return;
    }

    try {
        const res = await fetch(registerURL, {
            method: 'POST',
            body: JSON.stringify({
                email: formDataEntries.email,
                password: formDataEntries.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if (data.email) {
            localStorage.clear();
            localStorage.setItem('email', data.email);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('password', data.password);
        }
        else if (data.code >= 400) {
            alert(data.message);
            return;
        }
    }
    catch (err) {
        alert(err.message)
        return;
    }

    location.href = 'index.html';
})
