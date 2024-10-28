function solve(input) {

    let res = {
        model: input.model
    };

    if (input.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    }
    else if (input.power > 90 && input.power <= 120) {
        res.engine = {
            power: 120,
            volume: 2400
        }
    }
    else {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (input.carriage === 'hatchback') {
        res.carriage = {
            type: 'hatchback',
            color: input.color
        }
    }
    else {
        res.carriage = {
            type: 'coupe',
            color: input.color
        }
    }

    res.wheels = input.wheelsize % 2 !== 0 ? new Array(4).fill(input.wheelsize) : new Array(4).fill(input.wheelsize - 1);
    return res;
}
solve({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 17
})