releasePipeline{
    buildCommands = ['npm install -only=dev'] // Add this when we figure out , 'npm run-script validate']
    buildTool = 'node-0.10'
    ocHost = 'env3-1-master.innovation.labs.redhat.com'
	dockerRegistry = 'registry.env3-1.innovation.labs.redhat.com'
    projectName = 'holmes-dev'
    appName = 'infographic-node-app' // this will need to be made env agnostic
    
	envs = [
		[name: 'Dev', projectName: 'holmes-dev'],
    	[name: 'Stage', projectName: 'holmes-stage' ],
    	[name: 'Production', projectName: 'holmes-prod' ]
   ]
}