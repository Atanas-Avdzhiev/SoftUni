function solve(input) {
    let plants = {};
    let sections = {};
    let command = input.shift();

    while (command !== 'EndDay') {
        let [commandName, secondCommand] = command.split(': ');

        switch (commandName) {
            case 'Plant': {
                let [plantName, waterNeededMl, section] = secondCommand.split('-');
                waterNeededMl = Number(waterNeededMl);

                if (!plants.hasOwnProperty(plantName)) {
                    plants[plantName] = {
                        waterNeededMl: waterNeededMl,
                        section: section,
                    };

                    if (!sections.hasOwnProperty(section)) {
                        sections[section] = [];
                    }
                    sections[section].push(plantName);
                } else {
                    plants[plantName].waterNeededMl += waterNeededMl;
                }
                break;
            }

            case 'Water': {
                let [plantName, waterAmountMl] = secondCommand.split('-');
                waterAmountMl = Number(waterAmountMl);

                if (plants.hasOwnProperty(plantName)) {
                    plants[plantName].waterNeededMl -= waterAmountMl;

                    if (plants[plantName].waterNeededMl <= 0) {
                        console.log(`${plantName} has been sufficiently watered.`);
                        let section = plants[plantName].section;
                        let indexInSection = sections[section].indexOf(plantName);
                        sections[section].splice(indexInSection, 1);
                        if (sections[section].length === 0) {
                            delete sections[section];
                        }
                        delete plants[plantName];
                    }
                }
                break;
            }
        }

        command = input.shift();
    }
    console.log('Plants needing water:');
    for (const plant in plants) {
        console.log(` ${plant} -> ${plants[plant].waterNeededMl}ml left`);
    }
    console.log('Sections with thirsty plants:');
    let entries = Object.entries(sections);
    for (const [section, plantsInSection] of entries) {
        if (plantsInSection.length > 0) {
            console.log(` ${section}: ${plantsInSection.length}`);
        }
    }
}
solve(["Plant: Rose-300-FlowerBed",
    "Plant: Tulip-150-FlowerBed",
    "Water: Rose-100",
    "Water: Tulip-150",
    "EndDay"])