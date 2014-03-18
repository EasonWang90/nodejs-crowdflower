var Job = require("./crowdflower/job.js"),
    Unit = require("./crowdflower/unit.js"),
    Judgment = require("./crowdflower/judgment")
exports.factory = function(fileName,apiKey){
    switch (fileName){
        case "job":
            job = new Job(apiKey);
            return job;
            break;
        case "unit":
            unit = new Unit(apiKey);
            return unit;
            break;
        case "judgment":
            judgment = new Judgment(apiKey);
            return judgment;
            break;
    }
}


