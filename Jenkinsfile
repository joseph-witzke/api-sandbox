pipeline {
    agent any
    tools { nodejs "Default" }

    stages {
        stage('Example') {
            steps {
                sh 'npm config ls'
            }
        }
    }
}