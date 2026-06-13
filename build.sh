#!/bin/bash
# Create directories
mkdir -p dist/css dist/js dist/img dist/webfonts

# Copy all assets
cp src/index.html dist/index.html
cp src/js/*.js dist/js/
cp src/img/* dist/img/
cp src/css/all.min.css dist/css/all.min.css
cp src/webfonts/* dist/webfonts/

# Fix the CSS path for dist-relative serving
sed -i 's|../dist/css/styles.css|css/styles.css|g' dist/index.html