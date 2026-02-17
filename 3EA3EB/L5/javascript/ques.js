console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("Promise.resolve"));

new Promise((resolve, reject) => {
    resolve();
    console.log("executor");
}).then(() => console.log("promise"));

console.log("synchronous");
