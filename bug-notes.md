# bug notes


## ts ignore

Cannot redeclare block-scoped variable 'log'.

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#suppress-errors-in-ts-files-using--ts-ignore-comments

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log("hello");
}

```

https://stackoverflow.com/questions/51145180/how-to-use-ts-ignore-for-a-block

https://github.com/Microsoft/TypeScript/issues/19573#issuecomment-499366523
