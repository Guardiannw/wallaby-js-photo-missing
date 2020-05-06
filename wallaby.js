module.exports = (wallaby) => {
    return {
        files: [
            '**/*.js',
            '!**/*.spec.js',
            '!**/node_modules/**/*'
        ],
        tests: [
            '**/*.spec.js',
            '!**/node_modules/**/*'
        ],
        env: {
            type: 'node'
        },
        testFramework: 'jest'
    };
};