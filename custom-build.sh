deploy-node input output

cd output/bin/src

DEPLOY_ENV=${deploy_env} npm run build

cd -
