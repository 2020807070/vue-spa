#!/bin/bash
export NODE_ENV='production'
git diff --cached --name-only | \
  grep -E "src/.*\.(js|jsx|ts|tsx)$" |\
  xargs eslint -c ./.eslintrc.js --max-warnings=0 --fix --no-ignore --no-error-on-unmatched-pattern
exit $?
