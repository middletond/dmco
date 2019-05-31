#!/usr/bin/env bash

# Deploys the site.

echo "Pulling latest code from repo."
git pull

echo "Updating packages."
npm install

echo "Building the site."
npx webpack
jekyll build

echo "Restarting server."
service nginx restart

echo "Deployed!"
