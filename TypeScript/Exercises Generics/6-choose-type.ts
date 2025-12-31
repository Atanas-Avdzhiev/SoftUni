type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key]
}

type test = {
    name: string,
    age: number,
    test: () => string;
}

type extracted = Choose<test, 'name' | 'age'>