/**
 * Define judgment module.
 * @module lib/crowdflower/judgment
 * @requires module: https
 */
var rest = require("./rest.js")
/**
 * @constructor
 * @desc Encode API key by encodeURI().
 * @param apikey
 */
var judgment = function(apikey){
    this.apiKey = encodeURI(apikey);
};
/**
 * Prototype of creating a judgement.
 * @param jobid {String} - The ID of a job.
 * @param jsonObject {object} - The attributes of a judgement.
 * @param callback {function} - A callback function.
 */
judgment.prototype.create = function(jobid,jsonObject,callback){
    var jobID = encodeURI(jobid);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/judgments?';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURI(subObj[subkeys[j]]);
                path += 'judgment['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURI(jsonObject[keys[i]]);
            path += 'judgment['+keys[i]+']='+value[i]+'&';
        }
    }
    path += 'key=' + this.apiKey;
    rest.makePostRequest(path, callback);
}
/**
 * Prototype of updating a judgement.
 * @param jobid {String} - The ID of a job.
 * @param jsonObject {object} - The attributes of a judgement.
 * @param judgment_id {String} - The ID of a judgement.
 * @param callback {function} - A callback function.
 */
judgment.prototype.update = function(jobid,jsonObject,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id = encodeURI(judgment_id);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id + '?';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURI(subObj[subkeys[j]]);
                path += 'judgment['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURI(jsonObject[keys[i]]);
            path += 'judgment['+keys[i]+']='+value[i]+'&';
        }
    }
    path += 'key=' + this.apiKey;
    rest.makePutRequest(path, callback);
}
/*
    two additional param: &page, &limit
 */
/**
 * Prototype of reading a judgement.
 * @param jobid {String} - The ID of a job.
 * @param judgment_id {String} - The ID of a judgement.
 * @param callback {function} - A callback function.
 */
judgment.prototype.read = function(jobid,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id= encodeURI(judgment_id);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id +'?';
    path += 'key=' + this.apiKey;
    console.log(path);
    rest.makeGetRequest(path, callback);
}
/**
 * Prototype of deleting a judgement.
 * @param jobid {String} - The ID of a job.
 * @param judgment_id {String} - The ID of a judgement.
 * @param callback {function} - A callback function.
 */
judgment.prototype.delete = function(jobid,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id = encodeURI(judgment_id);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id +'?';
    path += 'key=' + this.apiKey;
    rest.makeDeleteRequest(path, callback);
}
module.exports = judgment;