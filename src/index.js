// var val1 = "var変数";
// val1 = "変数を上書き";
// var val1 = "変数を再宣言";
// console.log(val1);

// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };

// val4.name = "jok";
// val4.addres = "Hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

// const name = "じゃけぇ";
// const age = 28;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("funk1です"));
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("funk2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 =`私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr6 = [30, 40];
// const arr5 = [...arr4];
// console.log(arr5);

// const arr7 = [...arr4, ...arr6];
// console.log(arr7);
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 ===1;
// })
// console.log(newNumArr);
// const newNumArr = nameArr.map((name) => {
//   if(name === "じゃけぇ"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNumArr);

// const val = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val);

// const num = 1300;
// console.log(num.toLocaleString());
// const newNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(newNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 80));

// const flag1 = true;
// const flag2 = false;
// if (flag1 && flag2) {
//   console.log('1も2もtrue');
// } else if (flag1 || flag2) {
//    console.log('1か2はの片方だけtrue');
// } else {
//   console.log('1も2もfalse');
// }

// const num = 100;
// const fee = num && '金額設定済み';
// console.log(fee);
