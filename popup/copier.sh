#!/bin/bash
#echo off
#rmdir "..\static" /S/Q
rm -r ../static
#del "..\asset-manifest.json"
rm ../asset-manifest.json
#del "..\popup.html"
rm ../popup.html

#xcopy ".\build\static" "..\static\" /E/H/Y
cp -r ./build/static ../static
#copy ".\build\index.html" "..\popup.html"
cp ./build/index.html ../popup.html
#copy ".\build\asset-manifest.json"
cp ./build/asset-manifest.json ../asset-manifest.json
#echo Done.