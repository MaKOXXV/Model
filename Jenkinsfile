node{
	satge('SCM Checkout'){
		git 'https://github.com/MaKOXXV/Model.git'
	}
	stage('Compile-Package'){
		def mvnHome = tool name: 'maven_3_6_3', type: 'maven'
		sh "${mvnHome}/bin/mvn package"
	}
}
