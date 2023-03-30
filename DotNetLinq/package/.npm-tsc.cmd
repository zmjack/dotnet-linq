@echo off

echo tsc...
call tsc index.ts -d --outdir lib

cd ..
echo webpack...
call webpack
echo copy dist to html-simple
cd "package"
call xcopy "dist" "..\html-simple\" /Y

echo done.
