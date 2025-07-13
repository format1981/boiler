import boundaries from "eslint-plugin-boundaries";
import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import boundariesConfig from "./boundaries.config.mjs";
import js from "@eslint/js";
import vueParser from "vue-eslint-parser";
//import jest from "eslint-plugin-jest";

export default [
    {
        ignores: ["node_modules/**", "dist/**"],
    },

    boundariesConfig,

    {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parser: vueParser,
            sourceType: "module",
            ecmaVersion: "latest",
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: false,
                    jsx: false
                }
            }
        },
    },


    /*{
        files: ["src/!**!/!*.ts"],
        languageOptions: {
            parser: typescriptParser,
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            boundaries,
            //prettier,
        },
        rules: {
            //...js.configs.recommended.rules,
            //...typescriptEslintPlugin.configs.recommended.rules,
            //...eslintConfigPrettier.rules,
            //...eslintPluginPrettierRecommended.rules,
            ...boundaries.configs.strict.rules,
            /!*"prettier/prettier": [
                "error",
                {
                    printWidth: 99,
                    parser: "flow",
                },
            ],*!/
            //"no-undef": "error",
            //"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
            "boundaries/element-types": [
                2,
                {
                    default: "disallow",
                    rules: [
                        {
                            from: ["main"],
                            allow: ["helpers"],
                        },
                        {
                            from: ["utils"],
                            allow: ["helpers"],
                        },
                        /!*{
                            from: "modules",
                            allow: ["components"],
                        },*!/
                    ],
                },
            ],
        },
        settings: {
            "boundaries/elements": [
                {
                    type: "main",
                    pattern: "src/main.ts",
                    mode: "full",
                },
                {
                    type: "helpers",
                    pattern: "src/helpers/!**!/!*.helpers.ts",
                    mode: "full",
                },
                {
                    type: "utils",
                    pattern: "src/utils/!**!/!*.util.ts",
                    mode: "full",
                },
            ],
            "boundaries/include": ["src/!**!/!*.*"],
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
    },*/
    /*{
        files: ["test/!**!/!*.js", "test/!**!/!*.spec.js"],
        languageOptions: {
            ecmaVersion: 2018,
            globals: {
                ...globals.node,
                //...jest.environments.globals.globals,
            },
            sourceType: "commonjs",
        },
        plugins: {
            prettier,
            //jest,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            ...eslintPluginPrettierRecommended.rules,
            "prettier/prettier": [
                "error",
                {
                    printWidth: 99,
                    parser: "flow",
                },
            ],
            "no-undef": "error",
            "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
        },
    },*/
];

/*module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:boundaries/strict",
  ],
  settings: {

  },
  rules: {

  },
};*/