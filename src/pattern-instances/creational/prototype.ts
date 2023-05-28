export class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet(): void {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    public clone(): Person {
        return new Person(this.name, this.age);
    }
}
