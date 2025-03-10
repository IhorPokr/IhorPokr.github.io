#!/bin/bash

# Remove existing package-lock.json and node_modules
rm -f package-lock.json
rm -rf node_modules

# Clean npm cache
npm cache clean --force

# Reinstall dependencies
npm install

echo "Dependencies reinstalled with a fresh package-lock.json" 