pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop', credentialsId: 'leikra44', url: 'https://lab.ssafy.com/s10-webmobile1-sub2/S10P12C106.git'
            }
        }
        
        stage('Build and Deploy') {
            steps {
                dir('/back') {
                sh 'docker compose down'
                sh 'docker compose pull'
                sh 'docker compose up -d'
                }
            }
        }
    }
}
