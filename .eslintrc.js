module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/jsx-indent": ["error", 4],
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true
        }],
        "jsx-a11y/click-events-have-key-events": "off",
        "no-param-reassign": ["error", { "props": false }],
        "max-len": ["error", { "code": 200 }],
        "jsx-a11y/anchor-is-valid": "off"
    },
    "env": {
        "browser": true,
        "mocha": true,
        "node": true
    },
    "plugins": [
        "import",
        "react"
    ]
};
