function solve(obj) {

    const uriPattern = /([A-Z]*[a-z]*\.*\**[0-9]*)*/;

    if (!obj.method) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.method != 'GET' && obj.method != 'POST' && obj.method != 'DELETE' && obj.method != 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.uri) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let matched = obj.uri.match(uriPattern)[0];
    let test = obj.uri.match(uriPattern).input;

    if (obj.uri.includes(' ')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!matched || matched == '' || matched != test) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!obj.version) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.version != 'HTTP/0.9' && obj.version != 'HTTP/1.0' && obj.version != 'HTTP/1.1' && obj.version != 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!obj.message && obj.message !== '') {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (obj.message.includes('<') || obj.message.includes('>') || obj.message.includes('\\') || obj.message.includes('&') || obj.message.includes('\'') || obj.message.includes('"')) {
        throw new Error('Invalid request header: Invalid Message');
    };
    return obj;
}
solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
})