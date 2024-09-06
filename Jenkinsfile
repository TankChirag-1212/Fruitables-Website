pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_REGISTRY = 'chirag1212'
        DOCKER_IMAGE_NAME = 'final-task'
        DOCKER_CREDENTIALS = 'docker-credentials-id'
        KUBERNETES_NAMESPACE = 'default'
        KUBERNETES_CREDENTIALS = 'kubeconfig-id'
        HELM_RELEASE_NAME = 'fruitables'
        HELM_CHART_PATH = './helmChart'
        HELM_PACKAGE_NAME = 'fruitables-1.0.0.tgz'
    }
    stages {
        stage('Source Code Checkout') {
            steps {
                // Pull code from the Git repository
                git branch: 'master', url: 'https://github.com/TankChirag-1212/Fruitables-Website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from Dockerfile
                    def dockerImage = docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:v3.1")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to Docker registry
                    docker.withRegistry('', DOCKER_CREDENTIALS) {
                        docker.image("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:v3.1").push('v3.1')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Deploy Docker image to Kubernetes using Helm
                    withKubeConfig([credentialsId: KUBERNETES_CREDENTIALS]) {
                        sh """
                        helm package ${HELM_CHART_PATH}
                        helm upgrade --install ${HELM_RELEASE_NAME} ./${HELM_PACKAGE_NAME} --namespace ${KUBERNETES_NAMESPACE} --set image.repository="${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}" --set image.tag=v3.1
                        """
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Clean up any resources, if necessary
            cleanWs()
        }
    }
}
