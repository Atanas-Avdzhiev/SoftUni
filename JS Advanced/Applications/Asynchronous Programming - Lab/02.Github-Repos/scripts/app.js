function loadRepos() {
	const username = document.querySelector('#username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const ul = document.querySelector('#repos');

	fetch(url)
		.then(res => res.json())
		.then(data => {
			ul.innerHTML = '';
			data.forEach(repo => {
				const a = document.createElement('a');
				a.href = repo.html_url;
				a.textContent = repo.full_name;
				const li = document.createElement('li');
				li.appendChild(a);
				ul.appendChild(li);
			})
		})
		.catch(err => console.log(err));
}