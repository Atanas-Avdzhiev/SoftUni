function httpCodes(response: { code: number, text: string, printChars?: number }) {
    if (response.printChars) {
        console.log(response.text.slice(0, response.printChars));
        return;
    }
    console.log(response.text);
}
httpCodes({ code: 201, text: 'Created'});