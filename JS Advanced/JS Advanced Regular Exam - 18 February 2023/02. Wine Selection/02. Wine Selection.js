class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) throw new Error('Not enough space in the cellar.');
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        })
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const findWine = this.wines.find(wine => wine.wineName === wineName);
        if (!findWine) throw new Error(`${wineName} is not in the cellar.`);
        if (findWine.paid) throw new Error(`${wineName} has already been paid.`);
        findWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const findWine = this.wines.find(wine => wine.wineName === wineName);
        if (!findWine) throw new Error("The wine, you're looking for, is not found.");
        if (!findWine.paid) throw new Error(`${wineName} need to be paid before open the bottle.`);
        let indexToRemove = this.wines.indexOf(findWine);
        this.wines.splice(indexToRemove, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = `You have space for ${this.space} bottles more.`;
            result += `\nYou paid ${this.bill}$ for the wine.`;
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            sortedWines.forEach(wine => {
                let isPaid = wine.paid ? 'Has Paid' : 'Not Paid';
                result += `\n${wine.wineName} > ${wine.wineType} - ${isPaid}.`;
            })
            return result;
        }

        let result = '';
        this.wines.forEach((wine, index) => {
            if (wine.wineType === wineType) {
                let isPaid = wine.paid ? 'Has Paid' : 'Not Paid';
                if (index === 0) {
                    result += `${wine.wineName} > ${wine.wineType} - ${isPaid}.`;
                }
                else {
                    result += `\n${wine.wineName} > ${wine.wineType} - ${isPaid}.`;
                }
            }
        })
        if (result.length === 0) throw new Error(`There is no ${wineType} in the cellar.`);
        return result;
    }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision('Rose'));