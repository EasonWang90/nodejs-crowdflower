var rest = require("./rest.js")
var Unit = function(apikey){
    this.apiKey = encodeURI(apikey);
};
Unit.prototype.getstatus = function(jobid,callback){
    var jobID = encodeURI(jobid);
    var path = '/v1/jobs/' + jobID + '/units/ping?key=' + this.apiKey;
    rest.makeGetRequest(path,callback);
}
Unit.prototype.cancelUnit = function(jobid,unitid,callback){
    var jobID = encodeURI(jobid);
    var unitID = encodeURI(unitid);
    var path = '/v1/jobs/' + jobID + '/units/' + unitID + '/cancel?key=' + this.apiKey;
    rest.makePostRequest(path,callback);
}
Unit.prototype.createUnit = function(jobid,jsonObject,callback){
    var jobID = encodeURI(jobid);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/units?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURIComponent(subObj[subkeys[j]]);
                body += 'unit['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURIComponent(jsonObject[keys[i]]);
            body += 'unit['+keys[i]+']='+value[i]+'&';
        }
    }
    body += 'key=' + this.apiKey;
    //console.log(path);
    rest.makePostRequest(path,body, callback);
}
Unit.prototype.updateUnit = function(jobid,jsonObject,unitid,callback){
    var jobID = encodeURI(jobid);
    var unitID = encodeURI(unitid);
    var keys = Object.keys(jsonObject);
    var path = '/v1/jobs/' + jobID + '/units/' + unitID + '?';
    var body = '';
    var value = new Array();
    for(var i in keys){
        if(typeof jsonObject[keys[i]] === "object"){
            var subObj = jsonObject[keys[i]];
            var subkeys = Object.keys(subObj);
            var subvalue = new Array();
            for(var j in subkeys){
                subvalue[j] = encodeURIComponent(subObj[subkeys[j]]);
                body += 'unit['+keys[i]+']['+subkeys[j]+']='+subvalue[j]+'&'
            }
        }
        else{
            value[i] = encodeURIComponent(jsonObject[keys[i]]);
            body += 'unit['+keys[i]+']='+value[i]+'&';
        }
    }
    body += 'key=' + this.apiKey;
    //console.log(path);
    rest.makePutRequest(path,body, callback);
}
Unit.prototype.readUnit = function(jobid,unitid,callback){
    var jobID = encodeURI(jobid);
    var unitID = encodeURI(unitid);
    var path = '/v1/jobs/' + jobID + '/units/(' + unitID +')?';
    path += 'key=' + this.apiKey;
    rest.makeGetRequest(path, callback);
}
unit.prototype.deleteUnit = function(jobid,unitid,callback){
    var jobID = encodeURI(jobid);
    var unitID = encodeURI(unitid);
    var path = '/v1/jobs/' + jobID + '/units/' + unitID +'?';
    path += 'key=' + this.apiKey;
    //console.log(path);
    rest.makeDeleteRequest(path, callback);
}
Unit.prototype.splitField = function(jobid,columnField,delimiter,callback){ //columeField is a array of columeField
    var jobID = encodeURI(jobid);
    var delimiter = encodeURI(delimiter);
    var path = '/v1/jobs/' + jobID + '/units/split?'
    var fieldValue = new Array();
    for(var i in columnField){
        fieldValue[i] = encodeURI(columnField[i]);
        path += 'on=' + fieldValue[i] + ',';
    }
    path += '&with=' + delimiter + '&key=' + this.apiKey;
    rest.makePutRequest(path,callback);
}
module.exports = Unit;