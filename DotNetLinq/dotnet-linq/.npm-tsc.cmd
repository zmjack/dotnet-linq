@echo off
echo tsc...
call tsc index.ts -d --outdir lib
cd ..
echo webpack...
call webpack
echo copy dist to Simples
cd "dotnet-linq"
call xcopy "dist" "..\..\Simples\" /Y
echo done.
