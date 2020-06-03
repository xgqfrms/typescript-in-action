# TypeScript in Action


## TypeScript Playground

> online REPL

https://www.typescriptlang.org/play/


## install

```sh
# macOS
$ npm i -g typescript

$ tsc -v
# Version 3.9.3

$ tsc -h

$ tsc --all

# Enable incremental compilation
$ tsc -i

```

## compile

```sh
# tsconfig.json
$ tsc --init

$ tsc helloworld.ts

```

## tsconfig.json

https://aka.ms/tsconfig.json

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}

```

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",// umd
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "incremental": false
    // Enable incremental compilation
  }
}

```

## npm

```sh
$ npm init

```

## webpack

```sh
$ yarn add -D webpack webpack-cli webpack-dev-server webpack-merge

# clear & merge
$ yarn add -D clean-webpack-plugin

# html
$ yarn add -D html-webpack-plugin

$ yarn add -D ts-loader typescript


$ webpack init

```

## webpack-cli

https://github.com/webpack/webpack-cli

```sh
$ webpack-cli init

```

## webpack cli

https://webpack.js.org/api/cli/

```sh
$ webpack --json > webpack-stats.json

$ webpack --config ./build/webpack.config.js --json > ./build/webpack-stats.json


$ webpack --profile

```

https://webpack.js.org/configuration/

## webpack mode

https://webpack.js.org/configuration/mode/

> process.env.NODE_ENV

If not set, webpack sets `production` as the default value for mode.

```sh
# string = 'production': 'none' | 'development' | 'production'
$ webpack --mode=none
$ webpack --mode=development
$ webpack --mode=production
```

## process.env.NODE_ENV

```sh
$ process.env.NODE_ENV=production && webpack
$ process.env.NODE_ENV=development && webpack

```

https://github.com/xgqfrms-GitHub/Node-CLI-Tools/issues/13

### linux & mac

```sh
# process.env.NODE_ENV="production"
$ export NODE_ENV=production

```

### windows

```cmd
$ set NODE_ENV=production

```

## process.env & process.argv

```js
const log = console.log;

// log(`process.env =\n`, process.env)
log(`process.argv =\n`, process.argv)

```

## webpack plugins

https://webpack.js.org/plugins/html-webpack-plugin/

https://webpack.js.org/plugins/mini-css-extract-plugin/

https://webpack.js.org/plugins/uglifyjs-webpack-plugin/

https://webpack.js.org/plugins/uglifyes-webpack-plugin/

https://webpack.js.org/plugins/copy-webpack-plugin/

https://webpack.js.org/plugins/extract-text-webpack-plugin/


https://www.npmjs.com/package/clean-webpack-plugin


```sh
$ yarn remove webpack-clean-plugin webpack-html-plugin

```

## html template

https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates

## shell scripts

```sh
# app / dev
$ app
$ dev

```

## css

```sh
$ yarn add -D style-loader css-loader sass-loader node-sass url-loader

```

## images & files

```sh
$ yarn add -D file-loader html-loader

```

## js

```sh
# ES5 ? babel
$ yarn add -D uglify-es uglify-js

```

## ES-Next

> babel

```sh
$ yarn add -D babel-loader @babel/core @babel/preset-env

$ yarn add -D @babel/preset-typescript

$ yarn add -D @babel/plugin-transform-runtime @babel/plugin-proposal-object-rest-spread

$ yarn add -D @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining

```

## lint

> ESLint

```sh
$ yarn add -D eslint eslint-loader

$ yarn add -D eslint-plugin-react eslint-plugin-react-hooks

```

## unit testing

> jest

```sh
# jest
$ yarn add -D jest babel-jest

```

## utils

https://github.com/xgqfrms/webpack-4.x-best-practical/

```sh
$ yarn add -D rimraf
$ yarn add -D colors
$ yarn add -D cross-env
$ yarn add -D json5
$ yarn add -D shelljs
$ yarn add -D browser-sync json-server

```

## react

```sh
$ yarn add react react-dom

$ yarn add -D @types/react @types/react-dom @types/source-map

```

## webpack-dev-server & auto open browser

https://webpack.js.org/guides/development/#using-webpack-dev-server

```sh
$ webpack-dev-server --open

```

https://www.cnblogs.com/xgqfrms/p/13039022.html#4594888

