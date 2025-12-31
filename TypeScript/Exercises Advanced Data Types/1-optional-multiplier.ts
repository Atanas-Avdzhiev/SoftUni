function optionalMultiplier(param1?: string | number, param2?: string | number, param3?: string | number): number {

    const params = [param1, param2, param3];
    let result = 1;

    for (const param of params) {
        if (param !== undefined) {
            result *= +param;
        }
    }
    console.log(result);
    return result;
}

optionalMultiplier();