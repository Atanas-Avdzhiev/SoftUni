type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionPropertyNames<T>>;

type test = {
    name: string,
    age: number,
    test: () => string;
}

type extracted = AllFunctions<test>

type Employee = {
    name: string,
    salary: number,
    work: () => void,
    takeBreak: () => string
};

type extracted2 = AllFunctions<Employee>;

type Nope = {
    name: string
};

type extracted3 = AllFunctions<Nope>;