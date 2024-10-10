function extensibleObject() {
    const obj = {
        extend: function (targetObject) {
            for (let key in targetObject) {
                if (targetObject.hasOwnProperty(key)) {
                    if (typeof targetObject[key] === 'function') {
                        Object.getPrototypeOf(this)[key] = targetObject[key];
                    } else {
                        this[key] = targetObject[key];
                    }
                }
            }
        }
    };
    return obj;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {
        console.log('This is an extension method');
    },
    extensionProperty: 'someString'
};
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));
console.log(myObj.extensionProperty);
myObj.extensionMethod();