Nodejs-Crowdflower
=========
A toolkit for interacting with CrowdFlower via the REST API.

Example Usage
-------------

Specifiy which part of api need to use:
	
	Crowdflower.factory("job", Crowdflower_key)
	
Create a new job:

	newjob.createjob(jsonObject, callback)

Copy an existing job into a new one:
	
	newjob.copyjob(jobID, allUnit, gold, callback)
	
Upload data with data feed:

	newjob.uploadDataFeed(jobID, url, callback) // jobID ( optional)



Contributing
------------

1. Fork nodejs-crowdflower
2. Create a topic branch - `git checkout -b my_branch`
3. Make your feature addition or bug fix and add tests for it.
4. Commit, but do not mess with the rakefile, version, or history.
5. Push to your branch - `git push origin my_branch`
6. Create an Issue with a link to your branch

Copyright
---------

Copyright &copy; 2010 [Eason Wang](http://github.com/EasonWang90). See LICENSE for details.