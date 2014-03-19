/**
 * Define rest module.
 * @module lib/crowdflower/rest
 * @requires module: https
 */
var https = require('https');
/**
 * The content type of header.
 * @type {string}
 */
var contentType = 'application/json';
/**
 * Change contentType with new content type.
 * @param newContentType {String} - The new content type.
 */
function changeContentType(newContentType){
    contentType = newContentType;
}
/**
 * Make the post request to crowdflower, deal with different options by different path of crowdflower API
 * @param {string} path - A path of crowdflower API.
 * @param {json} jsonObject - A json object.
 * @param {callback} callback - callback function
 */
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
    var data ='';
    var reqPost = https.request(postOptions, function(res) {
        res.on('data', function(d) {
            data += d;
        });
        res.on('end',function(){
            return callback(data);
        });
    });

    // write the json data
   // console.log("\n\n" +jsonObject+"\n\n");
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}
/**
 * Makes delete request.
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
        'content-type': contentType,
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

    var data ='';
    var reqPost = https.request(postOptions, function(res) {
        res.on('data', function(d) {
            data += d;
        });
        res.on('end',function(){
            return callback(data);
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
        'content-type': contentType,
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

    var data ='';
    var reqPost = https.request(postOptions, function(res) {
        res.on('data', function(d) {
            data += d;
        });
        res.on('end',function(){
            return callback(data);
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
        'content-type': contentType,
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

    var data ='';
    var reqPost = https.request(postOptions, function(res) {
        res.on('data', function(d) {
            data += d;
        });
        res.on('end',function(){
            return callback(data);
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
