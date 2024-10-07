function solve(data, criteria) {
    data = JSON.parse(data);

    if (criteria === 'all') {
        for (let i = 0; i < data.length; i++) {
            console.log(`${i}. ${data[i].first_name} ${data[i].last_name} - ${data[i].email}`);
        }
        return;
    }

    const [keyCriteria, valueCriteria] = criteria.split('-');
    let dataFiltered = data.filter((obj) => obj[keyCriteria] === valueCriteria);
    for (let i = 0; i < dataFiltered.length; i++) {
        console.log(`${i}. ${dataFiltered[i].first_name} ${dataFiltered[i].last_name} - ${dataFiltered[i].email}`);
    }
}
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson')