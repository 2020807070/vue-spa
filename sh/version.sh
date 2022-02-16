#!/bin/bash

branch=$(git rev-parse --abbrev-ref HEAD)

if [ $branch != 'master' ]; then
  echo "error: 只能在master分支打版本号!!!"
  echo ""
  exit 1
fi

git pull --rebase

npm version $@ -m "build: %s --task=7326181"