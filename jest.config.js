// jest.config.js
module.exports = {
    verbose: true,
    testRegex: "((\\.|/*.)(spec))\\.js?$",
    setupFilesAfterEnv: ["<rootDir>enzyme-setup.js"],
    "transform": {
        "^.+\\.js$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    }
};
