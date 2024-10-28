function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let textArea = document.querySelector('#inputs textarea');
      let arrayInput = JSON.parse(textArea.value);
      let restaurants = {};

      for (const line of arrayInput) {
         let [restaurant, ...workers] = line.split(' - ');
         let workersArray = workers[0].split(', ');

         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = {};
         }
         for (const worker of workersArray) {
            let [name, salary] = worker.split(' ');
            restaurants[restaurant][name] = Number(salary);
         }
      }
      let highestAverageSalary = 0;
      let bestRestaurant;
      for (const restaurant in restaurants) {
         let values = Object.values(restaurants[restaurant]);
         let sumOfSalaries = values.reduce((acc, salary) => acc + salary, 0);
         let averageSalary = sumOfSalaries / values.length;
         if (averageSalary > highestAverageSalary) {
            highestAverageSalary = averageSalary;
            bestRestaurant = restaurant;
         }
      }
      let bestSalary = 0;
      for (const worker in restaurants[bestRestaurant]) {
         if (restaurants[bestRestaurant][worker] > bestSalary) {
            bestSalary = restaurants[bestRestaurant][worker];
         }
      }
      let bestRestaurantString = `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      let bestRestaurantWorkers = '';
      let workersArray = Object.entries(restaurants[bestRestaurant]);
      let sortedWorkers = workersArray.sort((a, b) => b[1] - a[1]);

      for (let i = 0; i < sortedWorkers.length; i++) {
         if (i < sortedWorkers.length - 1) {
            bestRestaurantWorkers += `Name: ${sortedWorkers[i][0]} With Salary: ${sortedWorkers[i][1]} `;
         }
         else {
            bestRestaurantWorkers += `Name: ${sortedWorkers[i][0]} With Salary: ${sortedWorkers[i][1]}`;
         }
      }
      let bestRestaurantOutputEl = document.querySelector('#bestRestaurant p');
      let workersOutputEl = document.querySelector('#workers p');
      bestRestaurantOutputEl.textContent = bestRestaurantString;
      workersOutputEl.textContent = bestRestaurantWorkers;
   }
}