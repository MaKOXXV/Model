pipeline{
    agent any
	
    stages {
	
	stage ('Compile Stage') {
		tools{
			jdk 'Java8'
				
		}
	    	steps{

	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn clean install package -s settings.xml'
				
	    		}
	    	}
	    }
    
	    stage ('testing Stage') {
		    
		tools{
			jdk 'Java8'
				
		}
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn test'
	    		}
	    	}
	    }
	    
	    stage ('Deployment Stage') {
		tools{
			jdk 'Java8'
				
		}
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn deploy'
	    		}
	    	}
	    }
    	
    }
 
}
