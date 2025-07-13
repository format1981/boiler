// https://github.com/javierbrea/epb-ts-example/tree/main

/**
 * 5. Правила названия директорий, функций, файлов
 * папка / файл / (функция, тип, переменная)
 *
 * composables / useUser.ts / useUser()
 * stores / user.store.ts / UserStore()
 * types / user.types.ts / UserT
 * constants / user.constants.ts / USER_NAME
 * helpers / user.helpers.ts / formatUser()
 * components / TheUser.vue
 * styles / user.scss
 * icons / UserIcon.svg / <UserIcon />
 *
 * 6. Для именования структуры папок используем "kebab-case"
 */

import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import boundaries from "eslint-plugin-boundaries";
//import globals from "globals";

export default {
    files: ["src/**/*.{ts,vue}"],
    languageOptions: {
        parser: typescriptParser,
        /*globals: {
            ...globals.node,
        },*/
    },
    plugins: {
        "@typescript-eslint": typescriptEslintPlugin,
        boundaries,
    },
    settings: {
        "boundaries/elements": [
            {
                type: "main",
                pattern: "src/main.ts",
                mode: "full",
            },
            {
                type: "app-vue",
                pattern: "src/App.vue",
                mode: "full",
            },
            {
                type: "domain-index",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/index.ts",
                capture: ["domainName"],
            },
            {
                type: "domain-api",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/api/**/*.ts",
                capture: ["domainName"],
            },
            {
                type: "domain-store",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/store/*.ts",
                capture: ["domainName"],
            },
            {
                type: "domain-components",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/components/**/*.vue",
                capture: ["domainName"],
            },
            {
                type: "domain-router",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/router/*.ts",
                capture: ["domainName"],
            },
            {
                type: "domain-types",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/types/*.ts",
                capture: ["domainName"],
            },
            {
                type: "domain-views",
                mode: "file",
                basePattern: "src/domains",
                pattern: "*/views/*.vue",
                capture: ["domainName"],
            },
            // Shared-файлы
            {
                type: "shared",
                mode: "file",
                pattern: "src/shared/**/*.ts",
            },
            // Core-файлы
            {
                type: "core-http",
                mode: "file",
                pattern: "src/core/http/*.ts",
            },
        ],
        "boundaries/include": ["src/**/*.*"],
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        //...js.configs.recommended.rules,
        //...typescriptEslintPlugin.configs.recommended.rules,
        //...eslintConfigPrettier.rules,
        //...eslintPluginPrettierRecommended.rules,
        ...boundaries.configs.strict.rules,
        // Структура слоев (сверху вниз):
        // views -> components -> store -> api -> types
        // Нельзя импортировать из более верхнего слоя
        // Например: в файл компонента можно импортировать из файла store,
        // но нельзя в файл store импортировать из файла component
        "boundaries/element-types": [
            2,
            {
                default: "disallow",
                rules: [
                    {
                        from: ["main"],
                        allow: [
                            "app-vue",
                        ],
                    },
                    {
                        from: ["app-vue"],
                        allow: [
                            "domain-index",
                            "shared",
                        ],
                    },
                    {
                        from: ["domain-index"],
                        allow: [
                            ["domain-api", { "domainName": "${domainName}" }],
                            ["domain-store", { "domainName": "${domainName}" }],
                            ["domain-components", { "domainName": "${domainName}" }],
                            ["domain-router", { "domainName": "${domainName}" }],
                            ["domain-types", { "domainName": "${domainName}" }],
                            ["domain-views", { "domainName": "${domainName}" }],
                        ],
                    },
                    {
                        from: ["domain-api"],
                        allow: [
                            ["domain-types", { "domainName": "${domainName}" }],
                            "core-http",
                            "domain-index",
                        ],
                    },
                    {
                        from: ["domain-store"],
                        allow: [
                            ["domain-types", { "domainName": "${domainName}" }],
                            ["domain-api", { "domainName": "${domainName}" }],
                            "domain-index",
                        ],
                    },
                    {
                        from: ["domain-components"],
                        allow: [
                            ["domain-types", { "domainName": "${domainName}" }],
                            ["domain-api", { "domainName": "${domainName}" }],
                            ["domain-store", { "domainName": "${domainName}" }],
                            ["domain-components", { "domainName": "${domainName}" }],
                            "domain-index",
                            "shared"
                        ],
                    },
                    {
                        from: ["domain-views"],
                        allow: [
                            ["domain-types", { "domainName": "${domainName}" }],
                            ["domain-api", { "domainName": "${domainName}" }],
                            ["domain-store", { "domainName": "${domainName}" }],
                            ["domain-components", { "domainName": "${domainName}" }],
                            ["domain-router", { "domainName": "${domainName}" }],
                            "domain-index",
                        ],
                    },
                    {
                        from: ["domain-router"],
                        allow: [
                            ["domain-types", { "domainName": "${domainName}" }],
                            ["domain-views", { "domainName": "${domainName}" }],
                        ],
                    },
                ],
            },
        ],
    },
}