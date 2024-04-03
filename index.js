#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir,{recursive: true});


const assets = path.resolve(__dirname, 'assets');
const public = path.resolve(__dirname, 'public');
fs.cpSync(assets, projectDir, {recursive:true});
fs.cpSync(public, projectDir, {recursive:true});

const projectPackageJson = require(path.join(projectDir, 'package.json'));

projectPackageJson.name = projectName;

fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(projectPackageJson, null, 2)
);


console.log('Success! Your new project is ready!');
console.log(`Created ${projectName} at ${projectDir}`);