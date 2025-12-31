type stringOrNumber<T> = T extends number ? number : string;

function conditionalNumber<T>(arg: stringOrNumber<T>): void {

    if (typeof arg === 'number') {
        console.log(arg.toFixed(2));
        return;
    }

    console.log(arg);
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
conditionalNumber<boolean>('a string');

// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');