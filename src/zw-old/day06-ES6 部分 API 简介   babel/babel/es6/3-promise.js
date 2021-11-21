const resolved = Promise.resolve(10);
const rejected = Promise.reject(-1);

Promise.allSettled([resolved, rejected])
  .then((results) => {
    console.log(results);
  });