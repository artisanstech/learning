function continueSample() {
  for (const item of _products) {
    if (item.standardCost > 1000) {
      continue;
    }
    console.log(JSON.stringify(item));
  }
}
