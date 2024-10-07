function solve() {
    const addButton = document.querySelector('#add');
    const taskElement = document.querySelector('#task');
    const descriptionElement = document.querySelector('#description');
    const dateElement = document.querySelector('#date');
    const openSection = document.querySelectorAll('section')[1];
    const inProgressSection = document.querySelectorAll('section')[2];
    const completeSection = document.querySelectorAll('section')[3];

    addButton.addEventListener('click', function (event) {
        event.preventDefault(); // optional;
        if (taskElement.value === '' || descriptionElement.value === '' || dateElement.value === '') {
            return;
        }
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const div = document.createElement('div');
        const startButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        startButton.className = 'green';
        deleteButton.className = 'red';
        startButton.textContent = 'Start';
        deleteButton.textContent = 'Delete';
        div.className = 'flex';
        p2.textContent = 'Due Date: ' + dateElement.value;
        p1.textContent = 'Description: ' + descriptionElement.value;
        h3.textContent = taskElement.value;

        div.append(startButton, deleteButton);
        article.append(h3, p1, p2, div);
        openSection.append(article);

        startButton.addEventListener('click', function start(event) {
            startButton.remove();
            deleteButton.remove();

            const finishButton = document.createElement('button');
            const inProgressDeleteButton = document.createElement('button');

            finishButton.className = 'orange';
            inProgressDeleteButton.className = 'red';
            finishButton.textContent = 'Finish';
            inProgressDeleteButton.textContent = 'Delete';

            const inProgressDiv = document.createElement('div');
            inProgressDiv.className = 'flex';
            inProgressDiv.append(inProgressDeleteButton, finishButton);
            article.append(inProgressDiv);
            inProgressSection.append(article);

            inProgressDeleteButton.addEventListener('click', () => article.remove());

            finishButton.addEventListener('click', function (event) {
                inProgressDeleteButton.remove();
                finishButton.remove();
                completeSection.append(article);
            })
        })
        deleteButton.addEventListener('click', () => article.remove());
    })
}