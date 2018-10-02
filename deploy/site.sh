#!/usr/bin/env bash

# Deploys the site.

echo "Pulling latest code from repo."
git pull

echo "Building the site."
jekyll build

echo "Restarting server."
service nginx restart

echo "Deployed!"
