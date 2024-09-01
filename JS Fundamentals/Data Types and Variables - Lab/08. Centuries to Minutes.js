function centuries(number) {

    let days = Math.trunc(number * 100 * 365.2422);
    console.log(`${number} centuries = ${number * 100} years = ${days} days = ${days * 24} hours = ${days * 24 * 60} minutes`);

}
centuries(5)