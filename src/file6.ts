//VIKTIGT

//spread operatorn arbetar bara med en nivå. typ som shalow copy.
//Har jg objekt med flera nivåer måste jag spreada det oxå.

//Tips1: Har jag typer som jävlas, och att jag vill använda samm typ till två libs som är förvirrade
//så kör jag min type = type1 & type2. Tex om jag slår ihop react navigation theme, och react native paper theme

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

//Extens fundering.
//Ok att tänka som både utökare och kravstälare.
