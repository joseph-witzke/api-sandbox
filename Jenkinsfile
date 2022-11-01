pipeline {
    agent any
    tools { nodejs "Default" }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm config ls'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}