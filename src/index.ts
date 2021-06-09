const name = "jake",
  age = 24,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}, You are ${age}, You are a ${gender}`;
};

// 변수+ ? => optional
console.log(sayHi(name, age));

export {};
// tsc : ts 파일을 컴파일하여 js, js.map을 만들어준다

// nodejs는 ts를 이해하지 못하기때문에 prestart: tsc 를 통해 js로 변형 한 후 진행해야한다.

// yarn add tsc-watch --dev
