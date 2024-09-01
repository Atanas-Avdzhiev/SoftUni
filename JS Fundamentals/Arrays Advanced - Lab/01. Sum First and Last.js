function sum(array) {

    let firstElement = Number(array[0]);
    let lastElement = Number(array.pop());
    console.log(firstElement + lastElement);
}
sum(['20', '30', '40'])