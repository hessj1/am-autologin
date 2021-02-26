echo off
rmdir "..\static" /S/Q
del "..\asset-manifest.json"
del "..\popup.html"

xcopy ".\build\static" "..\static\" /E/H/Y
copy ".\build\index.html" "..\popup.html"
copy ".\build\asset-manifest.json"
echo Done.