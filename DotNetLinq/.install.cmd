@echo off

echo Install global dependencies...
call npm i -g typescript mocha@10.2.0

echo Install dependencies...
call npm i --save ^
webpack@4.43.0 ^
webpack-cli@3.3.11 ^
ts-loader@7.0.4 ^
@babel/core@7.9.6 ^
babel-loader@8.1.0 ^
@types/node@14.0.1 ^
es6-promise@4.2.8 ^
should@13.2.3
