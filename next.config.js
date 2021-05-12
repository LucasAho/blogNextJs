const Dotenv = require("dotenv-webpack");

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new Dotenv({ silent: true }));
    return config;
    }, 
    env: {
        WORD_KEY: process.env.WORD_KEY,
    },
};

