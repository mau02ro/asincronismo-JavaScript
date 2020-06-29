const doSomeThingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Some Thing Async");
        }, 2000)
      : reject(new Error("Not resolve"));
  });
};

const doSomeThing = async () => {
  const someThing = await doSomeThingAsync();
  console.log(someThing);
};

console.log("Before");
doSomeThing();
console.log("After");

const anotherFunction = async () => {
  try {
    const someThing = await doSomeThingAsync();
    console.log(someThing + "2");
  } catch (error) {
    console.error(error);
  }
};
console.log("Before");
anotherFunction();
console.log("After");
