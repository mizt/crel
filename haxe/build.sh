#! /bin/sh
dir=$(cd $(dirname $0) && pwd)
cd $dir
haxe ./bin/build.hxml
if [ $? -eq 0 ]; then
    open index.html
fi