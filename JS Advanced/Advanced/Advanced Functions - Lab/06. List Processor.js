function solve(input) {

    let collection = [];
    let obj = {
        add: function (string) {
            collection.push(string);
        },
        remove: function (string) {
            collection = collection.filter(x => x !== string);
        },
        print: function () {
            console.log(collection.join(','));
        }
    }

    for (const command of input) {
        let [func, string] = command.split(' ');
        if (func === 'add') {
            obj.add(string);
        }
        else if (func === 'remove') {
            obj.remove(string);
        }
        else if (func === 'print') {
            obj.print();
        }
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])