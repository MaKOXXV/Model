pipeline{
    agent any
	
    stages {
	tools{
		jdk 'Java8'
				
			}
	
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
