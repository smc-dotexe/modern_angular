// const myName: string = 'Shane';

// const add = (a: number, b: number): number => {
//     return a + b;
// }

// const joinStrings = function(a: string, b:string): string {
//     return a + b;
// }

// interface Post {
//     title: string;
//     daysOld: number;
//     published: boolean;
// }

// const post: Post = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// }

// const printPost = (postToPrint: Post) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`
// };

// console.log(printPost(post));

// class Car {

//     constructor(public color: string, public year: number){}

//     drive() {
//         console.log('vroom');
//     }

//     specs() {
//         console.log(this.color, this.year);
//     }
// }

// const myCar = new Car('red', 2000);
// myCar.drive();

// console.log(myCar.color);

// console.log(myCar.specs());

// const Component = (target: any) => {
//     console.log(target);
// };

// @Component
// class Car {

// }

//==================================================================
// Modules
//==================================================================
// import { Car } from './Car';

// const myCar = new Car();

// interface Drivable {
//     speed: number;
//     drive(): string;
// }
//==================================================================
// Combining Interfaces and Classes
//==================================================================
// class Car implements Drivable {
//     speed = 10;

//     drive() {
//         return `I am driving at ${this.speed}`;
//     }
// }

// const myCar = new Car();

// const startDriving = (vehicle: Drivable) => {
//     vehicle.drive();
// }
//==================================================================
// Class Generics 
//==================================================================
// class NumberHolder {
//     value: number;
// }

// class StringHolder {
//     value: string;
// }

// class BooleanHolder {
//     value: boolean;
// }


// class ValueHolder<T> {
//     value: T;
// }

// const numberHolder = new ValueHolder<number>();
// numberHolder.value = 10;

//==================================================================
// Function Generics 
//==================================================================

// const numberWrapper = (value: number): number[] => {
//     return [value];
// }

// const valueWrapper = <T>(value: T): T[] => {
//     return [value];
// }

// console.log(valueWrapper<number>(10));
// console.log(valueWrapper<boolean>(true));