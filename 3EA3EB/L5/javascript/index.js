console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => console.log("C"))
  .then(() => {
    setTimeout(() => console.log("D"), 0);
  });

console.log("E");