#!/bin/bash

# Create a zip file of the entire project except node_modules and .git
zip -r terminal-portfolio.zip . -x "node_modules/*" -x ".git/*" -x ".next/*" -x "out/*"

echo "Created terminal-portfolio.zip"
echo "Please upload this entire zip file to GitHub" 