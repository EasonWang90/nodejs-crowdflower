/**
 * Decide what is the next to-do thing.
 * @module factory
 * @type {job|exports}
 * @requires ./crowdflower/job.js
 * @requires ./crowdflower/unit.js
 * @requires ./crowdflower/judgment
 */
var job = require("./crowdflower/job.js"),
    unit = require("./crowdflower/unit.js"),
    judgment = require("./crowdflower/judgment")
exports.factory = function(fileName,apiKey){
    switch (fileName){
        case "job":
            job = new job(apiKey);
            return job;
            break;
        case "unit":
            unit = new unit(apiKey);
            return unit;
            break;
        case "judgment":
            judgment = new judgment(apiKey);
            return judgment;
            break;
    }
}


