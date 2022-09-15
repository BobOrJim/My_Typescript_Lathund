type Person = {
  name: string;
  age: number;
  isAlive: boolean;
};

//Generate 1 person
const person1: Person = {
  name: "John",
  age: 20,
  isAlive: true,
};

function checkIfValueExistsInTAtKeyK<T, K extends keyof T, V extends T[K]>(obj: T, key: K, value: V) {
  return obj[key] === value;
}

console.log(checkIfValueExistsInTAtKeyK(person1, "name", "John")); //true
console.log(checkIfValueExistsInTAtKeyK(person1, "age", 20)); //true
console.log(checkIfValueExistsInTAtKeyK(person1, "isAlive", true)); //true
console.log(checkIfValueExistsInTAtKeyK(person1, "name", "John1")); //false
