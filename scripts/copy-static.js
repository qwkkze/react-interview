'use strict';
const path = require('path');
const fs = require('fs-extra');

const distDir = path.join(__dirname, '../dist');
const publicDir = path.join(__dirname, '../public');

fs.emptyDirSync(distDir);
fs.copySync(publicDir, path.join(distDir));
