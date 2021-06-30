/*

// interface 字段后面的逗号， 是可选的，但是建议加上！
export interface CanvasFingerprint {
  winding: boolean,
  geometry: string,
  text: string,
}

 */
/*

// interface 字段后面的分号 ✅， 是可选的，但是建议加上！
export interface CanvasFingerprint {
  winding: boolean;
  geometry: string;
  text: string;
}

 */

// interface 是 TS 校验自定义类型使用的，但是最终不会被编译出 js 代码
export interface CanvasFingerprint {
  winding: boolean
  geometry: string
  text: string
}

const obj: CanvasFingerprint = {
  winding: true,
  geometry: 'string',
  text: 'string',
};


/*

// .js

const obj = {
    winding: true,
    geometry: 'string',
    text: 'string',
};
export {};


*/

/*

// .d.ts

// 分号 ✅

export interface CanvasFingerprint {
    winding: boolean;
    geometry: string;
    text: string;
}


*/
