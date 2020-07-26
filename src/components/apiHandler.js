// Replace this with whatever you need to do with the results
function resultsHandler(input) {
    // If you use the ?as_array=1 parameter in the API call, the resulting
    // object will have an array named "results" as a property
    input.results.forEach(function(oneResult) {
        console.log(oneResult);
        console.log("\n");
    });
}

function lyyti_apiCall(call_string, callbackFunction) {
  // Store these somewhere safe and smart
    var public_key = 'apitesti';
    var private_key = 'asdasdasd123';

    var CryptoJS = require('crypto-js');        // npm install crypto-js
    var Base64 = require('js-base64').Base64;   // npm install js-base64
    var HTTPS = require('https');

    var timestamp = Math.floor(new Date()/1000);
    var signature = CryptoJS.HmacSHA256(
        Base64.encode(public_key+','+timestamp+','+call_string),
        private_key
    ).toString(CryptoJS.enc.Hex);

    var options = {
        hostname: 'api.lyyti.com',
        path: '/v2/'+call_string,
        method: 'GET',
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Authorization': 'LYYTI-API-V2 public_key='+public_key+', timestamp='+timestamp+', signature='+signature
        }
    };

    var request = HTTPS.get(options, function (response) {
        var buffer = '';

        response.on('data', function (chunk) {
            buffer += chunk;
        });

        response.on('end', function (err) {
            // This is an example, it's probably better to use promises, async/await, or something similar here
            callbackFunction(JSON.parse(buffer));
        });
    });
}

// Use the as_array=1 parameter to get the results as an array rather than object
lyyti_apiCall('events?as_array=1', resultsHandler);