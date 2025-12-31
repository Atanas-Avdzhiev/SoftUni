function cache() {
    let cache: string[] = [];
    let lastServed: number = 0;

    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (this: any) {

            if (cache.length === 0) {
                const result = original.apply(this);
                cache = [...result];
                lastServed = Date.now();
                return result;
            }

            const missmatch = Date.now() - lastServed;

            if (missmatch < 5000) {
                console.log('Returned from cache');
                return cache;
            }

            const result = original.apply(this);
            cache = [...result];
            lastServed = Date.now();
            return result;
        };

        return descriptor;
    };
}


class MockWeatherDataService {

    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string) { this.weatherData.push(data); }

    @cache()
    getWeatherData() { return this.weatherData; }
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData())
console.log(service.getWeatherData())
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData())

//7 seconds later

setTimeout(() => console.log(service.getWeatherData()), 7000)