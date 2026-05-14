pipeline {
    agent any

    environment {
        IMAGE_NAME    = 'gim-frontend'
        CONTAINER_NAME = 'gim-frontend-app'
        APP_PORT      = '8080'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm   ${CONTAINER_NAME} || true
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:80 \
                        --restart unless-stopped \
                        ${IMAGE_NAME}:latest
                """
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f'
        }
        success {
            echo "Deploye avec succes sur le port ${APP_PORT}"
        }
        failure {
            echo "Pipeline echoue — verifiez les logs ci-dessus"
        }
    }
}
