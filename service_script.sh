#!/usr/bin/sh

npm i

# Installing Client Side dependencies
cd client
rm -r dist 2> /dev/null

npm i
npm i -D
npm run prod

cd ..
node index.js
