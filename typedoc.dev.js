module.exports = {
    entryPoints: [
        './source'
    ],
    name: '@eagletrt/eagletrt-telemetria-simulator - DEV',
    tsconfig: 'source/tsconfig.json',
    gaID: process.env.GA_TOKEN,
    out: './docs/documentation/html-dev'
};