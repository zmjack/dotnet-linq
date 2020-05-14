@echo off

echo Install global dependencies...
call npm i -g typescript

echo Install dependencies...
call npm i -s ^
@types/node ^
es6-promise ^
should
