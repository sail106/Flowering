pipeline {
    agent any
    environment{
        REPO = "s10-webmobile1-sub2/S10P12C106"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: 'develop']],
                    extensions: [submodule(parentCredentials: true, trackingSubmodules: true)],
                    userRemoteConfigs: [[credentialsId: 'Github-access-token', url: 'https://github.com/sail106/settings']]
                )
            }
        }
        stage("Copy Env"){
            steps{
                scrips{
                    sh 'ls -al'
                    //Git submodule 내부의 .env 파일을 현재 작업 디렉토리로 이동
                    sh 'cp back/secure-settings front/'
                    sh 'ls frontend -al'
                }
            }
        }
        stage("Build"){
            steps {
                scrips {
                    sh 'ls -al'
                    component.each {
                        entry -> if (entry.value){
                            sh "docker compose -p test-server build ${entry.key.toLowerCase()}"
                        }
                    }
                }
            }
        }
        stage("Login") {
            steps{
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'Docker-hub', usernameVariable: 'DOCKER_USER_ID', parentCredentials: 'DOCKER_USER_PASSWORD']]){
                    sh """
                        set +x
                        echo $DOCKER_USER_PASSWORD | docker login -u $DOCKER_USER_ID --password-stdin
                        set -x
                    """
                }
            }
        }
        stage("Tag and Push"){
            steps {
                script {
                    component.each{entry->if(entry.value){
                        def var = entry.key
                        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'Docker-hub', usernameVariable: 'DOCKER_USER_ID', passwordVariable: 'DOCKER_USER_PASSWORD']]){
                            sh "docker push ${DOCKER_USER_ID}/toritest-${var.toLowerCase()}"
                        }
                    }}
                }
            }
        }


        stage('Build and Deploy') {
            steps {
                dir('/back') {
                sh 'docker-compose down'
                // sh 'docker compose -f docker-compose.yml pull'
                sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
}
