pipeline{
    agent any
	
    stages {
	
	stage ('Compile Stage') {
		tools{
			jdk 'Java8'
				
		}
	    	steps{

	    		withMaven(maven : 'maven_3_5_0'){
	    			bat 'mvn clean install package -s settings.xml'
				
	    		}
	    	}
	    }
    
	    stage ('testing Stage') {
		    
		tools{
			jdk 'Java8'
				
		}
	    	steps{
	    		withMaven(maven : 'maven_3_5_0'){
	    			bat 'mvn test -s settings.xml'
	    		}
	    	}
	    }
	    
	    stage ('Cucumber Reports') {
	    
		tools{
			jdk 'Java8'
				
		}
	    	 steps {
                cucumber buildStatus: "UNSTABLE",
                    fileIncludePattern: "target/negative/cucumber.json",
                    jsonReportDirectory: 'target'

            }
	    }
    	
    }
 
}
