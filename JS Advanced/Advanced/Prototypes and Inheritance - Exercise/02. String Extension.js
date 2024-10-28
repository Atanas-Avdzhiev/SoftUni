(function () {
    String.prototype.ensureStart = function (str) {
        let startOfString = this.slice(0, str.length);
        if (startOfString === str) {
            return this.toString();
        }
        else {
            return str + this;
        }
    };
    String.prototype.ensureEnd = function (str) {
        let endOfString = this.slice(this.length - str.length);
        if (endOfString === str) {
            return this.toString();
        }
        else {
            return this + str;
        }
    };
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (!this.includes(' ')) {
            return this.substring(0, n - 3) + '...';
        }
        let res = this.split(' ');
        let result = this + '...';

        while (result.length > n) {
            res.pop();
            result = res.join(' ') + '...';
        }
        return result;
    };

    String.format = function (str, ...params) {
        return str.replace(/{(\d+)}/g, function (match, index) {
            index = parseInt(index, 10);

            if (params[index] !== undefined) {
                return params[index];
            } else {
                return match;
            }
        });
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');