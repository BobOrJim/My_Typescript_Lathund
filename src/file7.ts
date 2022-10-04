//Enums är bra, om jag har något som kan vara text fyra olika states
//Tex 4 olika moment. Enumen kan då även användast som typening, tex att en string bara kan vara en av de 4 statesen

//Literal types
//Som types fast istället för att kravställa typen som kravställer jag möjliga värden
//Tex en funktion där man kan kasta en tärning 1-3 gånger
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}
console.log(rollDice(3));

//eller en överlagrad funktion, där bara vissa values är tillåtna
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 123123 });

/* En knapp kan ta emot style såhär, coolt
({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: "red",
      color: "white",
      fontSize: "xx-large",
    }}
  >
    {title ?? children}
  </button>


*/
