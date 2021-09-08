# TypeScript Docs

> v4.3.4


https://www.typescriptlang.org/docs/

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html


## install

https://www.typescriptlang.org/download

```sh
# local
# $ yarn add typescript --dev
$ yarn add typescript -D

# global
# $ yarn add -g typescript
```

## TSC

```sh
# Version 4.4.2
$ yarn tsc -v
# $ npm tsc -v

# ✅ global
$ tsc -v

# ❌ local
# $ ./node_modules/typescript/bin tsc -v
# zsh: permission denied: ./node_modules/typescript/bin

# ❌ local
# $ sudo ./node_modules/typescript/bin tsc -v
# sudo: ./node_modules/typescript/bin: command not found

# ✅ local
$ ./node_modules/typescript/bin/tsc -v 
# Version 4.4.2

```

https://github.com/xgqfrms/typescript-in-action/issues/19


## fix: Duplicate function implementation.ts(2393)


```ts
// ✅ 模块化
export {};

// 同名 declare, function, class, interface ...

```

## test

> TS => JS

```sh
# $ ./node_modules/typescript/bin/tsc ./filename.ts
$ ./node_modules/typescript/bin/tsc ./String-vs-string.ts

# $ ./node_modules/typescript/bin/tsc ./folder/*.ts
$ ./node_modules/typescript/bin/tsc ./docs/handbook/basic-types/old/*.ts

```
