#!/bin/bash
set -e

VERSION=$(date '+%Y%m%d-%H%M')

sed -i '' "s/const BUILD_VERSION = \"[^\"]*\";/const BUILD_VERSION = \"$VERSION\";/" tmp_script.js
sed -i '' "s/tmp_script\.js?v=[^\"']*/tmp_script.js?v=$VERSION/g" index.html

CURRENT=$(grep -o 'cache-v[0-9]*' sw.js | head -1 | grep -o '[0-9]*')
NEW=$((CURRENT + 1))
sed -i '' "s/study-deck-cache-v[0-9]*/study-deck-cache-v$NEW/" sw.js
sed -i '' "s/tmp_script\.js?v=[^\"']*/tmp_script.js?v=$VERSION/g" sw.js

git add -A
git commit -m "Deploy v$VERSION"
git push origin main
firebase deploy --only hosting

echo "Done: v$VERSION (cache-v$NEW)"
