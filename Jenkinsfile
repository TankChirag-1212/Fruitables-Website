pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_REGISTRY = 'chirag1212'
        DOCKER_IMAGE_NAME = 'final-task'
        DOCKER_CREDENTIALS = 'dockerHub-Id'
        KUBERNETES_NAMESPACE = 'default'
        HELM_RELEASE_NAME = 'fruitables'
        HELM_CHART_PATH = './helmChart/Chart.yaml'
    }
    stages {
        stage('Source Code Checkout') {
            steps {
                // Pull code from the Git repository
                git branch: 'main', url: 'https://github.com/TankChirag-1212/final-Task.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from Dockerfile
                    def dockerImage = docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:v2")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to Docker registry
                    docker.withRegistry('', 'docker-credentials-id') {
                        docker.image("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:latest").push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Deploy Docker image to Kubernetes using Helm
                    withKubeConfig([credentialsId: 'kubeconfig-credentials-id', contextName: 'your-kube-context']) {
                        sh """
                        helm upgrade --install ${HELM_RELEASE_NAME} ${HELM_CHART_PATH} \
                        --namespace ${KUBERNETES_NAMESPACE} \
                        --set image.repository=${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME} \
                        --set image.tag=latest
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
