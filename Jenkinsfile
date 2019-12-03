#!groovy
pipeline{
    agent any
    stages {
	    stage('CheckOut'){
	    	tool name: 'maven_3_6_3', type: 'maven'
		git 'https://github.com/MaKOXXV/Model.git'
	    }
	    stage ('Compile Stage') {
	    	steps{
	    		withMaven(maven : 'maven_3_6_3'){
	    			bat 'mvn clean compile'
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
