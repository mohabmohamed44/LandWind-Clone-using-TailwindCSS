# !/bin/bash
# Copy index.html to dist (with correct path)
cp src/index.html dist/index.html

# copy Js 
cp src/js/*.js dist/js/

# copy images
cp src/img/* dist/img/

# copy fontawesome css
cp src/css/all.min.css dist/css/all.min.css

# copy styles.css
cp src/css/styles.css dist/css/styles.css

# copy jQuery.min.js
cp src/js/jQuery.min.js dist/js/jQuery.min.js

# copy main.js
cp src/js/main.js dist/js/main.js