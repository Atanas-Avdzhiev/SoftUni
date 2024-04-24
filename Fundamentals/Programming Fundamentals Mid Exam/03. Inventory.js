function solve(array) {

    let items = array.shift().split(', ');
    let i = 0;
    let command = array[i];

    while (command !== 'Craft!') {

        let currentCommand = command.split(' - ');
        let firstCommand = currentCommand[0];

        switch (firstCommand) {
            case 'Collect':
                let collectItem = currentCommand[1];

                if (!items.includes(collectItem)) {
                    items.push(collectItem);
                }
                break;

            case 'Drop':
                let dropItem = currentCommand[1];

                if (items.includes(dropItem)) {
                    let indexOfDropItem = items.indexOf(dropItem);
                    items.splice(indexOfDropItem, 1);
                }
                break;

            case 'Combine Items':
                let secondCommand = currentCommand[1].split(':');
                let oldItem = secondCommand[0];
                let newItem = secondCommand[1];

                if (items.includes(oldItem)) {
                    let indexOfOldItem = items.indexOf(oldItem);
                    items.splice(indexOfOldItem + 1, 0, `${newItem}`);
                }
                break;

            case 'Renew':
                let renewItem = currentCommand[1];

                if (items.includes(renewItem)) {
                    let indexOfRenewItem = items.indexOf(renewItem);
                    items.splice(indexOfRenewItem, 1);
                    items.push(renewItem);
                }
                break;
        }

        i++;
        command = array[i];
    }
    console.log(items.join(', '));
}
solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])