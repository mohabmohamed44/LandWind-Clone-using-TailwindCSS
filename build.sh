#!/bin/bash

# Create directories first
mkdir -p dist/css dist/js dist/img dist/webfonts

# Copy index.html to dist
cp src/index.html dist/index.html

# Copy JS
cp src/js/*.js dist/js/

# Copy images
cp src/img/* dist/img/

# Copy FontAwesome CSS
cp src/css/all.min.css dist/css/all.min.css

# Copy FontAwesome webfonts
cp src/webfonts/* dist/webfonts/

# Note: styles.css is already built by tailwindcss into dist/css/styles.css
# Note: src/css/styles.css (the input) is just @tailwind directives, no need to copy it