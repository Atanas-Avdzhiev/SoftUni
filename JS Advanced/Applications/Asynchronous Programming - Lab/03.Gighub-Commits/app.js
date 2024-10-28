function loadCommits() {
    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const ul = document.querySelector('#commits');

    fetch(url)
        .then(data => data.json())
        .then(commit => {
            if (commit.status === undefined) {
                ul.innerHTML = '';
                commit.forEach(x => {
                    const li = document.createElement('li');
                    li.textContent = `${x.commit.author.name}: ${x.commit.message}`;
                    ul.appendChild(li);
                })
            }
            else if (commit.status === '404') {
                ul.innerHTML = '';
                const li = document.createElement('li');
                li.textContent = `Error: ${commit.status} (Not Found)`;
                ul.appendChild(li);
            }

        })
        .catch(err => console.log(err));
}