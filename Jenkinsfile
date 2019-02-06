pipeline {
  agent {
    node {
      label 'Linux'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh '''
           npm install
           node src/scripts/setup.js
        '''
      }
    }
  }
}
