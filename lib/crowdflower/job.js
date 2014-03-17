
//var childProcess = require('child_process');
var rest = require("./rest.js")
var job = function(apikey){
    this.apiKey = encodeURI(apikey);
};

job.prototype.createjob = function(jsonObject,callback){
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs?';
    var value = new Array();
    for(var i in keys){
        value[i] = encodeURI(jsonObject[keys[i]]);
        path += 'job['+keys[i]+']='+value[i]+'&';
    }
    path += 'key=' + this.apiKey;
   rest.makePostRequest(path, callback);
}
job.prototype.updatejob = function(jobid,jsonObject,callback){
    var keys = Object.keys(jsonObject);
    var jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '?';
    var value = new Array();
    for(var i in keys){
        value[i] = encodeURI(jsonObject[keys[i]]);
        path += 'job['+keys[i]+']='+value[i]+'&';
    }
    path += 'key=' + this.apiKey;
    console.log(path);
    rest.makePutRequest(path, callback);
}
job.prototype.deletejob = function(jobid,callback){
    var jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '?' + 'key=' + this.apiKey;

    rest.makeDeleteRequest(path, callback);
}
job.prototype.copyjob = function(jobid,allUnit,gold,callback) {
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/copy?all_unites=' + allUnit + '&gold=' + gold + '&key=' + this.apiKey;
    rest.makePostRequest(path,callback);
}
job.prototype.uploadfile = function(jobid,fileContent,force,callback){
    var path;

    if(arguments.length === 3){
        callback = force;
        force = fileContent;
        fileContent = jobid;
        path = '/v1/jobs/upload?key=' + this.apiKey + '&force=' + force;
    }
    else{
        jobID = encodeURI(jobid);
        path = '/v1/jobs/' + jobID + '/upload?' + 'key=' + this.apiKey + '&force=' + force;
    }
    rest.makePostRequest(path, fileContent, callback);
}
job.prototype.pausejob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/pause?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.resumejob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/resume?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.canceljob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/cancel?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.checkjob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/ping?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.legendjob = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/legend?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.viewchannel = function(jobid,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/channels?' + 'key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
job.prototype.setchannel = function(jobid,channels,callback){
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/channels?';
    for(var i=0;i<channels.length;i++){
        path += 'channels[]=' + channels[i] + '&';
    }
    path += 'key=' + this.apiKey;
    rest.makePutRequest(path,callback);
}
job.prototype.gold = function(reset,jobid,check,callback){
    jobID = encodeURI(jobid);
    check = encodeURI(check);
    if(reset === true){
        check = "";
    }
    var path = '/v1/jobs/' + jobID + '/gold?' + 'reset=' + reset + '&check=' +check + '&key=' +this.apiKey;
    rest.makePutRequest(path,callback);
}
job.prototype.changeContentType = function(newContentType){
    if(typeof newContentType !== "string"){
        console.log("the content-type must be a string!");
    }
    else{
        rest.changeContentType(newContentType);
    }
}
job.prototype.uploadDataFeed = function(jobid,uri,callback){
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
job.prototype.downloadFile = function(jobid, typeFile, fullJugdment, callback){// boolean fullJudgment
    jobID = encodeURI(jobid);
    typeFile = encodeURI(typeFile);
    var path = '/v1/jobs/' + jobID + '.' + typeFile + '?' + 'key=' + this.apiKey + '&full=' + fullJugdment;
    rest.makeGetRequest(path,callback);
}
job.prototype.createOrder = function(jobid,channels,debit,callback){ // channels is an array
    jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/orders?';
    for(var i=0;i<channels.length;i++){
        path += 'channels[]=' + channels[i] + '&';
    }
    path += 'key=' + this.apiKey + '&debit[units_count]=' + debit;
    rest.makePostRequest(path,callback);
}
job.prototype.readOrder = function(jobid,id,callback){ // not sure what id is for
    jobID = encodeURI(jobid);
    ID = encodeURI(id)
    var path = '/v1/jobs/' + jobID + '/orders/' + ID + '?' + 'key=' + this.apiKey;
}
module.exports = job;

