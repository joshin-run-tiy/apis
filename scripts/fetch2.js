window.onload = function() {
  const dataSrc = 'http://ckjacobson.com/maxicom/reports/flow/1.json';

  fetch(dataSrc, { method: 'get', })
  .then(function(response) {
    console.log('response', response);
    return response.json();
  }).then(function(data) {
    console.log('data', data);
  }).catch(function(err) {
    console.log('err', err);
  })

  console.log( 'async?');
}
