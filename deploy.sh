#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run build
yarn build

# navigate into the build output directory
cd dist
cp index.html 404.html

# if you are deploying to a custom domain
echo 'yizzy.nlplab.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:wohchowshy/wohchowshy.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -