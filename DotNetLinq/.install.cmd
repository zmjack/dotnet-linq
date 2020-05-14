@echo off

echo Install global dependencies...
call npm i -g typescript

echo Install dependencies...
call npm i -s ^
webpack ^
webpack-cli ^
typescript
ts-loader ^
@babel/core ^
babel-loader ^
@types/node ^
es6-promise ^
should
