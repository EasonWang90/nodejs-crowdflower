var https = require('https');
/**
 * Make the post request to crowdflower, deal with different options by different path of crowdflower API
 * @param {string} path - A path of crowdflower API.
 * @param {json} jsonObject - A json object.
 * @param {callback} callback - callback function
 */
var contentType = 'application/json';
function changeContentType(newContentType){
    contentType = newContentType;
}

function makePostRequest(path, jsonObject, callback) {
    if (typeof jsonObject === 'function') {
        callback = jsonObject;
        jsonObject = '';
    }

    if (typeof jsonObject === 'undefined') {
        jsonObject = '';
    }

    if (typeof callback === 'undefined') {
        callback = function() {};
    }

    var postHeader = {
        'accept' : 'application/json',
        'content-type': contentType,
        'connection': 'keep-alive',
        'content-length' : Buffer.byteLength(jsonObject, 'utf8')
    };

    // the post options
    var postOptions = {
        host : 'api.crowdflower.com',
        port : 443,
        path : path,
        method : 'POST',
        headers : postHeader
    };

    // do the POST call
    var reqPost = https.request(postOptions, function(res) {
        res.on('data', function(d) {
            return callback(d);
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}
/**
 * inner function makes delete request
 * @param {string} path - path that can post to
 * @param {object} jsonObject - parameter that can be function or undefined
 * @param {callback} callback - callback function
 */
function makeDeleteRequest(path, jsonObject, callback) {

    if (typeof jsonObject === 'function') {
        callback = jsonObject;
        jsonObject = '';
    }

    if (typeof jsonObject === 'undefined') {
        jsonObject = '';
    }

    if (typeof callback === 'undefined') {
        callback = function() {};
    }
    var deleteHeader = {
        'accept' : 'application/json',
        'content-type': 'application/json',
        'connection': 'keep-alive',
        'content-length' : Buffer.byteLength(jsonObject, 'utf8')
    };
    var deleteOptions = {
        host: 'api.crowdflower.com',
        port: 443,
        path: path,
        method: 'DELETE',
        headers: deleteHeader
    };

    var reqPost = https.request(deleteOptions, function(res) {
        res.on('data', function(d) {
            return callback(d);
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}
/**
 * Make the get request to crowdflower, deal with different options by different path of crowdflower API
 * @param {string} path - A path of crowdflower API.
 * @param {json} jsonObject - A json object.
 * @param {callback} callback - callback function
 */
function makeGetRequest(path, jsonObject, callback) {

    if (typeof jsonObject === 'function') {
        callback = jsonObject;
        jsonObject = '';
    }

    if (typeof jsonObject === 'undefined') {
        jsonObject = '';
    }

    if (typeof callback === 'undefined') {
        callback = function() {};
    }
    var getHeader = {
        'accept' : 'application/json',
        'content-type': 'application/json',
        'connection': 'keep-alive',
        'content-length' : Buffer.byteLength(jsonObject, 'utf8')
    };
    var getOptions = {
        host: 'api.crowdflower.com',
        port: 443,
        path: path,
        method: 'GET',
        headers: getHeader
    };

    var reqPost = https.request(getOptions, function(res) {
        res.on('data', function(d) {
            return callback(JSON.parse(d));
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}
/**
 * Make the put request to crowdflower, deal with different options by different path of crowdflower API
 * @param {string} path - A path of crowdflower API.
 * @param {json} jsonObject - A json object.
 * @param {callback} callback - callback function
 */
function makePutRequest(path, jsonObject, callback) {

    if (typeof jsonObject === 'function') {
        callback = jsonObject;
        jsonObject = '';
    }

    if (typeof jsonObject === 'undefined') {
        jsonObject = '';
    }

    if (typeof callback === 'undefined') {
        callback = function() {};
    }
    var putHeader = {
        'accept' : 'application/json',
        'content-type': 'application/json',
        'connection': 'keep-alive',
        'content-length' : Buffer.byteLength(jsonObject, 'utf8')
    };
    var putOptions = {
        host: 'api.crowdflower.com',
        port: 443,
        path: path,
        method: 'PUT',
        headers: putHeader
    };

    var reqPost = https.request(putOptions, function(res) {
        res.on('data', function(d) {
            return callback(d);
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}
exports.makePutRequest = makePutRequest;
exports.makeGetRequest = makeGetRequest;
exports.makePostRequest = makePostRequest;
exports.makeDeleteRequest = makeDeleteRequest;
exports.changeContentType = changeContentType;
