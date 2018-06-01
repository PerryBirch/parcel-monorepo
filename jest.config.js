module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.(jsx|js)?$": "babel-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx"
    ]
}
