/* AJAX; Asychronous JavaScript and XML; XMLHttpRequest; XHR */
// AJAX; Asynchronous JavaScript and XML;
// XMLHttpRequest; XHR

window.onload = function () {
  // First, create the object that performs the work...
  const http = new XMLHttpRequest(); //state 0

  // Now give the request object a function
  // to use when there is an update on the request...
  http.onreadystatechange = function () {
    console.log('onreadystatechange', http);
    // This function may be executed up to 5 times!


    //The "readyState" on the http object tells us
    //what state the request is in
    // 0 - not initialized
    // 1 - set up
    // 2 - sent
    // 3 - in process
    // 4 - complete


    if (http.readyState === 4 )
      // Now we know the request is complete;

      // Can now also see the responsive status
      // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (http.status > 399) {
      // Request completed, but the server gave us an error.

        // Handle the error!
      }
      else if (http.status > 199 && http.status < 299) {
        //Request completed successfully
        console.log( 'responseText', http.responsieText );
        // This is our server rexponsie data!
        // Do awesome things with the data!
        console.log( JSON.parse(http.response) );
      } // Sean has never run into needing another else, but for learning purposes.
      else {
        console.log('Things have gone catastrophically wrong');
      }
    }


  const isAsync = true;

  // note the path is relative to the index.html page
  const dataSrc = './scripts/data.json'

  // type, url, async(true)/sync(false)
  http.open('GET', dataSrc, isAsync); // State 1 (open call)
  http.overrideMimeType('application/json'); //treat data as JSON data
  http.send(null); // State 2 (send call)
  console.log(http);
  console.log('isAsync', isAsync); // Log state of our

// End result, get the data to show up as an object.
};
