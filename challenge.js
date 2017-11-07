var timeStarted = Date.now();
parallel([
  function(callback) {
    setTimeout(function() {
      callback(undefined,1);
    },2000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,2);
    },1000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,3);
    },1500);
  },
  // function(callback) {
  //   setTimeout(function() {
  //     callback('boom',undefined);
  //   },1200);
  // }
], function(err,result) {
  var duration = (Date.now() - timeStarted);
  console.log('duration:',duration); // 2000s
  if (err) {
    console.log('err',err); // undefined
  } else {
    console.log('result',result); // [1,2,3]
  }
});
