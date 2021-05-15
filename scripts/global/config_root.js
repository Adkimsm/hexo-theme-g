/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');
hexo.on('generateBefore', () => {
    const configFromRoot = (hexo) => {
        const configPath = path.join(hexo.base_dir, '_config.g.yml');
        return fs.existsSync(configPath);
    };

    configFromRoot(hexo);
});