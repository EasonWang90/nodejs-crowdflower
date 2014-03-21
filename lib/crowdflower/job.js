
//var childProcess = require('child_process');
/**
 * Define job module.
 * @module lib/crowdflower/job
 * @requires module: ./rest.js
 */
var rest = require("./rest.js")
/**
 * @constructor
 * @desc Encode API key by encodeURI().
 * @param apikey
 */
var Job = function(apikey){
    this.apiKey = encodeURI(apikey);
};
/**
 * Prototype of creating a new job.
 * @param jsonObject {object} - Contains attributes of the new job.
 * @param callback {function} - A callback function.
 */
Job.prototype.createjob = function(jsonObject,callback){
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        value[i] = encodeURIComponent(jsonObject[keys[i]]);
        body += 'job['+keys[i]+']='+value[i]+'&';
    }
    body += 'key=' + this.apiKey;
   rest.makePostRequest(path,body, callback);
}
/**
 * Prototype of updating a job.
 * @param jobid {String} - The ID of a existed job.
 * @param jsonObject {object} - Contains attributes of the new job.
 * @param callback {function} - A callback function.
 */
Job.prototype.updatejob = function(jobid,jsonObject,callback){
    var keys = Object.keys(jsonObject);
    var jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        value[i] = encodeURIComponent(jsonObject[keys[i]]);
        body += 'job['+keys[i]+']='+value[i]+'&';
    }
    body += 'key=' + this.apiKey;
    //console.log(path);
    rest.makePutRequest(path, body, callback);
}
/**
 * Prototype of deleting a existed job.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.deletejob = function(jobid,callback){
    var jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '?' + 'key=' + this.apiKey;

    rest.makeDeleteRequest(path, callback);
}
/**
 * Prototype of copy a existed job.
 * @param jobid {String} - The ID of a existed job.
 * @param allUnit - Option for copying a job with all units.
 * @param gold - Option for copying a job with test questions.
 * @param callback {function} - A callback function.
 */
Job.prototype.copyjob = function(jobid,allUnit,gold,callback) {
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/copy?all_unites=' + allUnit + '&gold=' + gold + '&key=' + this.apiKey;
    rest.makePostRequest(path,callback);
}
/**
 * Prototype of uploading file to a existed job.
 * @param jobid {String} - The ID of a existed job. (optional)
 * @param force - Add force=true as a request parameter to upload the data anyway.
 * @param fileContent - Content of the uploading file.
 * @param content_type - the content type for POST file
 * @param callback {function} - A callback function.
 */
Job.prototype.uploadfile = function(jobid,force,fileContent,content_type,callback){
    var path;
    if(typeof jobid === "boolean"){
        callback = content_type;
        content_type = fileContent;
        fileContent = force;
        force = jobid;
        path = '/v1/jobs/upload?key=' + this.apiKey + '&force=' + force;
    }
    else{
        jobID = encodeURI(jobid);
        path = '/v1/jobs/' + jobID + '/upload?' + 'key=' + this.apiKey + '&force=' + force;
    }
    rest.makePostRequest(path, fileContent, content_type, callback);
}
/**
 * Prototype of pausing a running job with.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.pausejob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/pause?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of resuming a paused job.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.resumejob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/resume?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of canceling a ordered job.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.canceljob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/cancel?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of checking the status/progress of a existed job.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.checkjob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/ping?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of showing you the generated keys that will end up being submitted with your form.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.legendjob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/legend?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of viewing the channel(s) of a existed job.
 * @param jobid {String} - The ID of a existed job.
 * @param callback {function} - A callback function.
 */
Job.prototype.viewchannel = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/channels?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of updating the channel(s) of a existed job.
 * @param jobid {String} - The ID of a existed job.
 * @param channels - The channels those need to be updated.
 * @param callback {function} - A callback function.
 */
Job.prototype.setchannel = function(jobid,channels,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/channels?';
    for(var i=0;i<channels.length;i++){
        path += 'channels[]=' + channels[i] + '&';
    }
    path += 'key=' + this.apiKey;
    rest.makePutRequest(path,callback);
}
/**
 * Prototype of updating test questions of a existed job.
 * @param reset - Remove the test questions.
 * @param jobid {String} - The ID of a existed job.
 * @param check - This field is required if you are adding gold. It must be set to the name of the field being checked against your quality control set. This name is always lower cased and under scored (like_this_example). You can find the name that was generated for you by using the legend API call on a job.
 * @param callback {function} - A callback function.
 */
Job.prototype.gold = function(reset,jobid,check,callback){
    jobID = encodeURI(jobid);
    check = encodeURI(check);
    if(reset === true){
        check = "";
    }
    var path = '/v1/jobs/' + jobID + '/gold?' + 'reset=' + reset + '&check=' +check + '&key=' +this.apiKey;
    rest.makePutRequest(path,callback);
}
/**
 * Prototype of changing content type with new content type.
 * @param newContentType {String} - The new content type.
 */
Job.prototype.changeContentType = function(newContentType){
    if(typeof newContentType !== "string"){
        console.log("the content-type must be a string!");
    }
    else{
        rest.changeContentType(newContentType);
    }
}
/**
 * Prototype of uploading data by feeding.
 * @param jobid {String} - The ID of a existed job.
 * @param uri {String} - The target feed link.
 * @param callback {function} - A callback function.
 */
Job.prototype.uploadDataFeed = function(jobid,uri,callback){
    var path;

    if(arguments.length === 2){
        callback = uri;
        uri = jobid;
        uri = uri.replace(/(\r\n|\n|\r|\s)/gm,"");
        uri = encodeURI(uri);
        path = '/v1/jobs/upload?key=' + this.apiKey + '&job[uri]=' + uri;
    }
    else{
        jobID = encodeURI(jobid);
        uri = uri.replace(/(\r\n|\n|\r|\s)/gm,"");
        uri = encodeURI(uri);
        path = '/v1/jobs/' + jobID + '/upload?' + 'key=' + this.apiKey + '&job[uri]=' + uri;
    }
    rest.makePostRequest(path,callback);
}
/**
 * Prototype of downloading a file of all judgments collected for a given job.
 * @param jobid {String} - The ID of a existed job.
 * @param typeFile {String} - The type of downloading file.
 * @param fullJugdment - A boolean param, decide for collect with full judgement or not.
 * @param callback {function} - A callback function.
 */
Job.prototype.downloadFile = function(jobid, typeFile, fullJugdment, callback){// boolean fullJudgment
    jobID = encodeURI(jobid);
    typeFile = encodeURI(typeFile);
    var path = '/v1/jobs/' + jobID + '.' + typeFile + '?' + 'key=' + this.apiKey + '&full=' + fullJugdment;
    rest.makeGetRequest(path,callback);
}
/**
 * Prototype of creating an order.
 * @param jobid {String} - The ID of a existed job.
 * @param channels - A collection of channels that the job should be posted to. We have consolidated them and they can be all enabled by the channel 'on_demand'.
 * @param debit - A positive integer representing the number of units that should be ordered.
 * @param callback {function} - A callback function.
 */
Job.prototype.createOrder = function(jobid,channels,debit,callback){ // channels is an array
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/orders?';
    for(var i=0;i<channels.length;i++){
        path += 'channels[]=' + channels[i] + '&';
    }
    path += 'key=' + this.apiKey + '&debit[units_count]=' + debit;
    rest.makePostRequest(path,callback);
}
/**
 * Prototype of reading an order.
 * @param jobid {String} - The ID of a existed job.
 * @param id {String} - The ID of an existed order.
 * @param callback {function} - A callback function.
 */
Job.prototype.readOrder = function(jobid,id,callback){ // not sure what id is for
    jobID = encodeURI(jobid);
    ID = encodeURI(id)
    var path = '/v1/jobs/' + jobID + '/orders/' + ID + '?' + 'key=' + this.apiKey;
}
module.exports = Job;

