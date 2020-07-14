function mathSample() {
  "use strict";

  let price = 200;

  // And (&&) Operator
  if (price > 10 && price < 1600) {
    console.log("price > 10 && price < 1600 is true");
  }
  // And (&&) Operator
  if (price > 10 && price < 200) {
    console.log("price > 10 && price < 200 is true");
  } else {
    console.log("price > 10 && price < 200 is false");
  }

  if (price > 10 || price < 1600) {
    console.log("price > 10 || price > 1600 is true");
  }
  if (price > 10 || price > 1600) {
    console.log("price > 10 || price > 1600 is true");
  }

  if (!(price < 10)) {
    console.log("!(price < 10) is true");
  }
}
