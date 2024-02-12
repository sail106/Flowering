def component = [
    'front': true,
    'back': true,
    'nginx': true,
    'redis': false // redis 이미지는 빌드 또는 푸시하지 않으므로 false로 설정
]

pipeline {
    agent any
    environment {
        // 환경변수 설정
        DOCKER_USER_ID = 'rlagudals0420'
        DOCKER_HUB_CREDENTIALS_ID = "Docker-hub"
        GITHUB_CREDENTIALS_ID = "Github-access-token"
        REPO = "s10-webmobile1-sub2/S10P12C106"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: '*/develop']],
                    extensions: [[$class: 'SubmoduleOption', recursiveSubmodules: true]],
                    userRemoteConfigs: [[credentialsId: GITHUB_CREDENTIALS_ID, url: 'https://github.com/sail106/settings']]
                ]
            }
        }
        stage('Setup Environment') {
            steps {
                dir("${env.WORKSPACE}/back"){
                    script {
                        sh "chmod +x ./gradlew"
                        def version_value = sh(returnStdout: true, script: "./gradlew properties -q | grep 'version:'").trim()
                        def version = version_value.split(/:/)[1].trim()
                        env.TAG = version
                        sh "echo TAG=$version >> .env"
                        sh "cat .env"
                    }
                }
            }
        }
        stage("Copy Env") {
            steps{
                script{
                    sh 'cp back/secure-settings/.env front/'
                    sh 'ls front -al'
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    sh "docker-compose -f back/docker-compose.yml build"
                }
            }
        }
        stage("Docker Login") {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USER --password-stdin'
                }
            }
        }
        stage("Tag and Push") {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    component.each { key, value ->
                        if (value && key != "redis") {
                            def imageName = "${DOCKER_USER_ID}/s10c106-${key}:${env.TAG}"
                            sh "docker tag ${key}:latest ${imageName}"
                            sh "docker push ${imageName}"
                        }
                    }
                }
            }
        }
        stage('Prune old images'){
            steps{
                script{
                    sh "docker image prune -f --filter until=24h"
                }
            }
        }
        stage('Pull') {
            steps {
                script {
                    component.each { key, value ->
                        if (value && key != "redis") {
                            sh "docker-compose -f back/docker-compose.yml pull ${key}"
                        }
                    }
                }
            }
        }
        stage('Up') {
            steps {
                script {
                    component.each { key, value ->
                        if (value) {
                            sh "docker-compose -f back/docker-compose.yml up -d ${key}"
                        }
                    }
                }
            }
        }
    }
}
