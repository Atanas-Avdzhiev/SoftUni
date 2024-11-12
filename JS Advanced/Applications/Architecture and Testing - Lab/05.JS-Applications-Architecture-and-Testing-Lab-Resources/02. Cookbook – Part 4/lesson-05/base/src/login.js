export function login() {

    const siteSections = document.querySelectorAll('.site-section');
    siteSections.forEach(section => {
        section.style.display = 'none';
    })

    const login = document.querySelector('#login');
    login.style.display = 'block';

    const loginURL = 'http://localhost:3030/users/login';
    let form = document.querySelector('#login form');

    const newForm = form.cloneNode(true);
    form.replaceWith(newForm);
    form = newForm;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(loginURL, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.code >= 400) {
                    return alert(data.message);
                }

                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('email', data.email);
                localStorage.setItem('id', data._id);
                form.reset();
                location.href = '/src/index.html';
            })
            .catch(err => alert(err.message));
    })
}