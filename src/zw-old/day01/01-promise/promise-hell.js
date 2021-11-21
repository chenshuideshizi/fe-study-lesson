function createPromise() {
  return new Promise(resolve => {
    resolve();
  });
}

createPromise()
  .then(res => {
    return promise2
      .then(result => {
        return promise3.
          .then(res3 => {
            // ...
          });
      });
  });