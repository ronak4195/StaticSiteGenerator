const projects = require('./src/data/projects');

module.exports = {
    site: {
        title: 'StaticSiteGenerator',
        description: 'Micro Static Site Generator in Node.js',
        basePath: process.env.NODE_ENV === 'production' ? '/StaticSiteGenerator' : '',
        projects
    },
    build: {
        outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
    }
};
