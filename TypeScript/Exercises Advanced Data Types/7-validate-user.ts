type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function validateUser(user: object): user is User {

    if (typeof user !== 'object') return false;

    const userAny = user as any;

    if (typeof userAny.id !== 'number' && typeof userAny.id !== 'string') {
        return false;
    }

    if (typeof userAny.id === 'number' && userAny.id <= 100) {
        return false;
    }

    if (typeof userAny.id === 'string' && userAny.id.length !== 14) {
        return false;
    }

    if (typeof userAny.username !== 'string' || (userAny.username.length < 5 || userAny.username.length > 10)) {
        return false;
    }

    if (typeof userAny.passwordHash !== 'string' && !Array.isArray(userAny.passwordHash)) {
        return false;
    }

    if (typeof userAny.passwordHash === 'string' && userAny.passwordHash.length !== 20) {
        return false;
    }

    if (Array.isArray(userAny.passwordHash) && userAny.passwordHash.length !== 4) {
        return false;
    }

    if (Array.isArray(userAny.passwordHash)) {
        for (const password of userAny.passwordHash) {
            if (typeof password !== 'string' || password.length !== 8) {
                return false;
            }
        }
    }

    if (userAny.status !== 'Locked' && userAny.status !== 'Unlocked') {
        return false;
    }

    return true;
}

console.log(validateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(validateUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }))
console.log(validateUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(validateUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' }))
console.log(validateUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' }))
console.log(validateUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }))