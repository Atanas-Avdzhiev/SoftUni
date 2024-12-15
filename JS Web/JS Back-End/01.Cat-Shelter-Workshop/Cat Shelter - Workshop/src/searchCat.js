document.querySelector('button[type="button"]').addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('input[type="text"]').value;
    if (searchInput === '') return;
    //const res = await fetch(`http://localhost:5000/searchCatLink`);
    location.href = `/searchCat=${searchInput}`; // not sure if doing it without request is a good way, but it works
    //const data = await res.json();
});