function unknownResponse(object: unknown): string {

    if (object &&
        typeof object === 'object' &&
        'value' in object &&
        typeof object.value === 'string') {
        console.log(object.value);
        return object.value;
    }
    console.log('-');
    return '-';
}

unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' });