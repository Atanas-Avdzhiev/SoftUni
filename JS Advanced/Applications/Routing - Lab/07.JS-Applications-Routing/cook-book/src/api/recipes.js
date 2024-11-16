const baseUrl = 'http://localhost:3030/data/recipes';

const recipes = {
    getAll(filter) {
        const searchParams = new URLSearchParams();

        if (filter.search) {
            searchParams.set('where', `name LIKE "${filter.search}"`);
        }

        return fetch(`${baseUrl}?${searchParams.toString()}`)
            .then(res => res.json())
            .then(data => Object.values(data));
    },
    getRecent() {
        const query = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
        });

        return fetch(`${baseUrl}?${query.toString()}`)
            .then(res => res.json())
            .then(data => Object.values(data));
    },
    getOne(id) {
        return fetch(`${baseUrl}/${id}`)
            .then(res => res.json());
    }
}

export default recipes;
