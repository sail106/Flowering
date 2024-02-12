def component = [
    'front': true,
    'back': true,
    'nginx': true,
    'redis': false
]
pipeline {
    agent any
    environment {
        // 환경변수 설정
                // Docker 이미지 태그 설정
        NGINX_TAG = "latest"
        FRONT_TAG = "v1.0"
        BACK_TAG = "v2.1"
        REDIS_TAG = "alpine"
        DOCKER_USER_ID = 'rlagudals0420'
        // Docker Hub 및 GitHub 크리덴셜 ID
        DOCKER_HUB_CREDENTIALS_ID = "Docker-hub"
        GITHUB_CREDENTIALS_ID = "Github-access-token"
        REPO = "s10-webmobile1-sub2/S10P12C106"
    }
    stages {
        stage('Checkout') {
            steps {
                // GitHub 크리덴셜을 사용하여 소스 코드 체크아웃
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: '*/develop']],
                    extensions: [[$class: 'SubmoduleOption', parentCredentials: true, recursiveSubmodules: true]],
                    userRemoteConfigs: [[credentialsId: 'Github-access-token', url: 'https://github.com/sail106/settings']]
                ]
            }
        }
        stage('Setup Environment') {
            steps {
                dir("${env.WORKSPACE}/back"){
                    script {
                        sh "ls . -al"
                        sh "chmod +x ./gradlew"
                        def version_value = sh(returnStdout: true, script: "./gradlew properties -q | grep 'version:'").trim()
                        version = version_value.split(/:/)[1].trim()
                        env.TAG = version
                        //이 명령은 현재 작업 디렉토리에 .env 파일을 생성하고, 그 파일 안에 TAG라는 이름의 변수와 그 값을 씀.
                        //docker에 동적으로 tag를 지정하기 위해 사용했다.
                        sh "echo TAG=$version >> .env"
                        sh "cat .env"
                    }
                }
            }
        }
        stage("Copy Env") {
            steps{
                script{
                    // 현재 디렉토리 위치 출력
                    sh 'pwd'
                    sh 'ls -al'
                    // .env 파일 복사
                    sh 'cp back/secure-settings/.env front/'
                    // sh 'cp .env front/'
                    sh 'ls front -al'
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    // 현재 디렉토리 위치 출력
                    sh 'pwd'
                    sh 'ls -al'
                    // docker-compose가 설치되어 있는지 확인하고, 없으면 설치
                    sh '''
                    if ! command -v docker-compose &> /dev/null
                    then
                        echo "docker-compose not found, installing..."
                        sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                        sudo chmod +x /usr/local/bin/docker-compose
                    else
                        echo "docker-compose is already installed."
                    fi
                    '''
                    // Docker Compose를 사용하여 서비스 빌드
                    sh "docker-compose -f back/docker-compose.yml build"
                }
            }
        }
        stage("Docker Login") {
            steps {
                // Docker Hub 크리덴셜을 사용하여 Docker에 로그인
                withCredentials([usernamePassword(credentialsId: 'Docker-hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USER --password-stdin'
                }
            }
        }
        stage("Tag and Push") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Docker-hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh "docker-compose -f back/docker-compose.yml push"
                }
            }
        }
        stage('Prune old images'){
            steps{
                script{
                    sh "docker image prune --filter until=1h"
                }
            }
        }
        stage('Pull') {
            steps {
                script {
                    component.each{entry ->
                        if(entry.value&&entry.key!="redis"){
                            def var = entry.key
                            sh "docker-compose -p test-server pull ${var.toLowerCase()}"
                        }
                    }
                }
            }
        }
        stage('Up') {
            steps {
                script {
                    component.each{ entry ->
                        if(entry.value){
                            def var = entry.key
                            try {
                                sh "docker-compose -p test-server up -d ${var.toLowerCase()}"
                            } catch (Exception e) {
                                // 'docker compose up -d' 명령이 실패한 경우
                                echo "Failed to up. Starting 'docker compose start'..."
                                sh "docker-compose -p test-server restart ${var.toLowerCase()}"
                            }
                        }
                    }
                }
            }
        }
    }
    // post {
    //     always {
    //         script {
    //             def Author_ID = sh(script: "git show -s --pretty=%an", returnStdout: true).trim()
    //             def Author_Name = sh(script: "git show -s --pretty=%ae", returnStdout: true).trim()
    //             mattermostSend (color: 'good',
    //                     message: "빌드 ${currentBuild.currentResult}: ${env.JOB_NAME} #${env.BUILD_NUMBER} by ${Author_ID}(${Author_Name})\n(<${env.BUILD_URL}|Details>)",
    //                     endpoint: 'https://meeting.ssafy.com/hooks/',
    //                     channel: 'C106-Jenkins'
    //             )
    //         }
    //     }
    // }
    
}
