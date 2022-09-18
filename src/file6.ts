type Person = {
  name: string;
  age: number;
  isAlive?: boolean;
};

//Add property to Person
type PersonWithAddress = Person & {
  address: string;
};

//Remove property from Person
type PersonWithoutAge = Omit<Person, "age">;

//Remove multiple properties from Person
type PersonWithoutAgeAndName = Omit<Person, "age" | "name">;

//Pick properties from Person
type PersonNameAndAge = Pick<Person, "name" | "age">;

//Change property in Person
type PersonWithAgeAsString = Person & {
  age: string;
};

//Make all properties in Person optional
type PersonWithOptionalProperties = Partial<Person>;

//Make all properties in Person required
type PersonWithRequiredProperties = Required<Person>;

//Make all properties in Person readonly
type PersonWithReadonlyProperties = Readonly<Person>;

//Denna rackare är läcker då de params som skickas in i overrides kommer overrida de i Person.
const merge = (user: Person, overrides: PersonWithOptionalProperties): Person => {
  return { ...user, ...overrides };
};
