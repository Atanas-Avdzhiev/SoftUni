function solve(input) {

    let numberOfBarcodes = Number(input.shift());
    let pattern = /@#{1,}[A-Z][a-zA-Z0-9]{4,}[A-Z]@#{1,}/g;

    for (let i = 0; i < numberOfBarcodes; i++) {
        let currentBarcode = input[i];
        let productGroup = '00';
        if (currentBarcode.match(pattern)) {
            productGroup = currentBarcode.replace(/[^0-9]/g, '');
            if (!productGroup) {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        }
        else {
            console.log('Invalid barcode');
        }
    }

}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])