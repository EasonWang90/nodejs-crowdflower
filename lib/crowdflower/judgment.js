var rest = require("./rest.js")
var Judgment = function(apikey){
    this.apiKey = encodeURI(apikey);
};

Judgment.prototype.create = function(jobid,jsonObject,callback){
    var jobID = encodeURI(jobid);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/judgments?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURIComponent(subObj[subkeys[j]]);
                body += 'judgment['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURIComponent(jsonObject[keys[i]]);
            body += 'judgment['+keys[i]+']='+value[i]+'&';
        }
    }
    body += 'key=' + this.apiKey;
    rest.makePostRequest(path,body, callback);
}
Judgment.prototype.update = function(jobid,jsonObject,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id = encodeURI(judgment_id);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id + '?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURIComponent(subObj[subkeys[j]]);
                body += 'judgment['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURIComponent(jsonObject[keys[i]]);
            body += 'judgment['+keys[i]+']='+value[i]+'&';
        }
    }
    body += 'key=' + this.apiKey;
    rest.makePutRequest(path,body,callback);
}
/*
    two additional param: &page, &limit
 */
Judgment.prototype.read = function(jobid,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id= encodeURI(judgment_id);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id +'?';
    path += 'key=' + this.apiKey;
    console.log(path);
    rest.makeGetRequest(path, callback);
}
Judgment.prototype.delete = function(jobid,judgment_id,callback){
    var jobID = encodeURI(jobid);
    var judgment_id = encodeURI(judgment_id);
    var path = '/v1/jobs/' + jobID + '/judgments/' + judgment_id +'?';
    path += 'key=' + this.apiKey;
    rest.makeDeleteRequest(path, callback);
}
module.exports = Judgment;