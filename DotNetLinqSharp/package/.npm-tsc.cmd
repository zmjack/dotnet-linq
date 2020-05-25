@echo off
echo tsc...
call tsc index.ts --downlevelIteration -d --outdir lib
cd ..
rem echo webpack...
rem call webpack
rem echo copy dist to Simples
rem cd "package"
rem call xcopy "dist" "..\..\Simples\" /Y
rem echo done.
