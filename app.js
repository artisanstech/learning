let key = 42;

function getSecretCode(value) {
  let keyGenerator = function () {
    let key = 12;
    console.log("in keygenerator: ", key);
    return key;
  };
  let code = value * keyGenerator();
  console.log("in getSecretCode: ", key);
  return code;
}

let secretCode = getSecretCode(2);
console.log(secretCode);
