function reading(numberOfPages, pagesReadPer1Hour, numberOfDaysToReadTheBook) {

    let numberOfHoursToReadPerDay = (numberOfPages / pagesReadPer1Hour) / numberOfDaysToReadTheBook;
    console.log(numberOfHoursToReadPerDay);

}
reading(212, 20, 2)