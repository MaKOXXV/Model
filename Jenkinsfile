pipeline{
    agent any
	
    tools { 
        maven 'Maven 3.6.3' 
        bat label: '', script: 'export JAVA_HOME = C:\\Program Files\\Java\\jdk1.8.0_221'
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
