function solve(array) {

    let list = array.shift().split('!');
    let i = 0;
    let command = array[i];

    while (command !== 'Go Shopping!') {

        let splittedCommand = command.split(' ');
        let firstCommand = splittedCommand[0];

        switch (firstCommand) {
            case 'Urgent':
                let urgentItem = splittedCommand[1];

                if (!list.includes(urgentItem)) {
                    list.unshift(urgentItem);
                }
                break;

            case 'Unnecessary':
                let unnecessaryItem = splittedCommand[1];

                if (list.includes(unnecessaryItem)) {
                    let indexOfItem = list.indexOf(unnecessaryItem);
                    list.splice(indexOfItem, 1);
                }
                break;

            case 'Correct':
                let oldItem = splittedCommand[1];
                let newItem = splittedCommand[2];

                if (list.includes(oldItem)) {
                    let indexOfOldItem = list.indexOf(oldItem);
                    list.splice(indexOfOldItem, 1, newItem);
                }
                break;

            case 'Rearrange':
                let rearrangeItem = splittedCommand[1];

                if (list.includes(rearrangeItem)) {
                    let indexOfRearrangeItem = list.indexOf(rearrangeItem);
                    list.splice(indexOfRearrangeItem, 1);
                    list.push(rearrangeItem);
                }
                break;
        }

        i++;
        command = array[i];
    }
    console.log(list.join(', '));
}
solve(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Salt", "Correct Tomatoes Potatoes", "Go Shopping!"])