import java.net.URLEncoder

pipeline {
  parameters {
    booleanParam(name: 'deploy', defaultValue: true, description: 'Deploy build')
    booleanParam(name: 'store', defaultValue: false, description: 'Store build')
    booleanParam(name: 'release', defaultValue: false, description: 'Release build')
    // string(name: 'AUTHOR', defaultValue: '', description: 'Github user name')
    // string(name: 'AUTHOR_EMAIL', defaultValue: '', description: 'Github user e-mail')
    string(name: 'GIT_AUTHOR_NAME', defaultValue: '@semantic-release-bot', description: 'The author name associated with the Git release tag.')
    string(name: 'GIT_AUTHOR_EMAIL', defaultValue: '@semantic-release-bot', description: 'The author email associated with the Git release tag.')
    password(name: 'GIT_PASSWORD', defaultValue: '', description: 'Github user password/token')
    // string(name: 'GIT_COMMITTER_NAME', defaultValue: '@semantic-release-bot', description: 'The committer name associated with the Git release tag.')
    // string(name: 'GIT_COMMITTER_EMAIL', defaultValue: '@semantic-release-bot', description: 'The committer email associated with the Git release tag.')
    choice(name: 'destination', description: 'Destination folder', choices: ['asterics-web-devlinux/docs', 'asterics-web-devwindows/docs', 'asterics-web-production/docs' ])
    choice(name: 'agent', description: 'Agent', choices: ['Linux', 'Win'])
    choice(name: 'image', description: 'Docker Image', choices: ['node:10', 'node:11'])
    gitParameter(name: 'BRANCH', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'asterics-docs')
    // gitParameter(name: 'BRANCH_ASTERICS', branchFilter: 'origin.*?/(.*)', defaultValue: 'master', type: 'PT_BRANCH_TAG', useRepository: 'AsTeRICS')
  }
  triggers {
    // pollSCM('H/15 * * * *')
    pollSCM('* * * * *')
  }
  agent {
    docker {
      image params.image
      label params.agent
    }
  }
  stages {
    stage('Build') {
      environment {
        VERBOSE = true
        ENDPOINT = "docs"
      }
      steps {
        echo "Build"
        // sh '''
        //   yarn install
        //   yarn setup
        // '''
      }
    }
    stage('Prepare') {
      when { 
        anyOf { 
          equals expected: true, actual: params.release
          equals expected: true, actual: params.store
        }
      }
      steps {
        echo "Prepare"
      }
    }
    stage('Output') {
      parallel {
        stage('Deploy') {
          when {
            equals expected: true, actual: params.deploy
          }
          environment {
            SERVER = credentials('server')
          }
          steps {
            echo "Deploy"
            // sh '''
            //   mkdir build
            //   mv dist build/docs
            // '''
            // script {
            //   def remote = [ name: 'studyathome', host: 'studyathome.technikum-wien.at', user: env.SERVER_USR, password: env.SERVER_PSW, allowAnyHosts: true ]
            //   sshRemove remote: remote, path: "/var/www/html/${params.destination}", failOnError: false
            //   sshPut remote: remote, from: 'build/docs', into: "/var/www/html/${params.destination.replace("/docs", "")}"
            // }
          }
        }
        stage('Store') {
          when {
            equals expected: true, actual: params.store
          }
          steps {
            echo "Store"
          }
        }
        stage('Release') {
          when {
            // branch 'master'
            // changeset 'assets'
            equals expected: true, actual: params.release
          }
          environment {
            // GH_TOKEN = credentials('aa09e7a7-8013-4498-a6ca-7d12f57e2cbe')
            GH_AUTHOR_NAME = "$GIT_AUTHOR_NAME"
            GH_AUTHOR_EMAIL = "$GIT_AUTHOR_EMAIL"
            GH_COMMITTER_NAME = "$GIT_AUTHOR_NAME"
            GH_COMMITTER_EMAIL = "$GIT_AUTHOR_EMAIL"
            GH_TOKEN = "$GIT_PASSWORD"
            GIT_BRANCH = "$BRANCH"
            // GIT_CREDENTIALS = "${URLEncoder.encode("$GIT_AUTHOR_EMAIL")}:${URLEncoder.encode("$GIT_PASSWORD")}"
          }
          // input {
          //   message "Should the build be release on Github?"
          //   parameters {
          //     string(name: 'RELEASE_TAG', defaultValue: '', description: 'Version/Tag')
          //     text(name: 'RELEASE_NOTES', defaultValue: '', description: 'Release Notes')
          //     // booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')
          //     // choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')
          //     // password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')
          //     // file(name: "FILE", description: "Choose a file to upload")
          //   }
          // }
          steps {
            echo "Release"
            // sh '''
            //   printenv
            //   export GIT_BRANCH=$BRANCH
            //   printenv
            //   git status
            //   git log --oneline --graph --all -20
            //   git checkout $BRANCH
            //   git pull
            //   git status
            //   git log --oneline --graph --all -20
            //   yarn install
            //   yarn release:prepare
            //   git status
            //   git log --oneline --graph --all -20
            //   yarn release --branch $BRANCH 
            //   git status
            //   git log --oneline --graph --all -20
            //   printenv
            // '''

            // print URLEncoder.encode("$TOKEN", "UTF-8")
            // print URLEncoder.encode("$GIT_AUTHOR_EMAIL", "UTF-8")

            // print "$GIT_CREDENTIALS"

            // print s
            // print x
            // script {
            //   def x = URLEncoder.encode("$GIT_AUTHOR_EMAIL")
            //   def y = URLEncoder.encode("$GIT_PASSWORD")
            //   env.GIT_CREDENTIALS = ":"
            // }

            // sh '''
            //   printenv
            // '''

            sh '''
              git checkout $BRANCH
              git pull
              yarn install
              yarn release:prepare
              
              set +x
              alias urlencode='python -c "import sys, urllib as ul; print ul.quote_plus(sys.argv[1])"'
              export GIT_CREDENTIALS="$GIT_AUTHOR_EMAIL":"$GIT_PASSWORD"
              set -x
              printenv

              yarn release --branch $BRANCH
            '''
              // export GIT_CREDENTIALS=$(urlencode $GIT_AUTHOR_EMAIL):$(urlencode $GIT_PASSWORD)

            // sh '''
            //   export GIT_BRANCH=$BRANCH
            //   git checkout $BRANCH
            //   git pull
            //   yarn install
            //   yarn release:prepare
            //   yarn release --branch $BRANCH
            // '''

            // .. to be continued
            // --gh-username --gh-token https://github.com/semantic-release/cli

            // echo "Release Tag: ${RELEASE_TAG}"
            // echo "Release Notes:\n${RELEASE_NOTES}"
            // echo "Hello ${PERSON}"
            // echo "Biography: ${BIOGRAPHY}"
            // echo "Toggle: ${TOGGLE}"
            // echo "Choice: ${CHOICE}"
            // echo "Password: ${PASSWORD}"
          }
        }
      }
    }
  }
  // post {
  //   always {
  //     cleanWs cleanWhenAborted: false, cleanWhenFailure: false, cleanWhenNotBuilt: false
  //   }
  // }
}