const promise = function() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

Promise.all([promise().catch(function() { return "fail"; }), promise().catch(function() { return "fail"; })])
  .then(function(res) {
    console.log("已完成", res);
  });

