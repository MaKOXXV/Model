#!groovy
pipeline{
    agent any
	
    tools { 
        maven 'Maven 3.3.9' 
        jdk 'jdk8' 
    }
	
    stages {
		stage ('Compile Stage') {
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn clean install package -s settings.xml'
				
	    		}
	    	}
	    }
    
	    stage ('testing Stage') {
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn test'
	    		}
	    	}
	    }
	    
	    stage ('Deployment Stage') {
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn deploy'
	    		}
	    	}
	    }
    	
    }
 
}
