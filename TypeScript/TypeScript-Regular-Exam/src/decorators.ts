export function ApplyCommission(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    if (original) {
        descriptor.get = function () {
            const basePrice = original.apply(this);
            return basePrice * 1.20;
        };
    }

    return descriptor;
}