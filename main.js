let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];
/*
map 문제
모든 이름을 대문자로 바꾸어서 출력하시오.
성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

filter 문제
이름에 a를 포함한 사람들을 출력하시오.
이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

some 문제
전체 이름의 길이가 20자 이상인 사람이 있는가?
성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)

every 문제
모두의 전체 이름의 길이가 20자 이상인가?
모두의 이름에 a 가 포함되어 있는가?

find 문제
전체 이름의 길이가 20자 이상인 사람을 찾으시오.
미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)

findIndex 문제
전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
*/
console.log(1);
names.map((item, idx) => {
  const upper = item.toUpperCase();
  console.log(upper);
});
console.log(2);
names.map((item, idx) => {
  const words = item.split(" ")[0];
  console.log(words);
});
console.log(3);
names.map((item) => {
  const words = item.split(" ");
  let firstWord = "";
  words.map((item) => {
    firstWord += item.charAt();
  });
  console.log(firstWord);
});
/*filter 문제
이름에 a를 포함한 사람들을 출력하시오.
이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
map : 반환값을 배열에 담아 반환한다.
filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 false.
every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)
*/
const data = names.filter((item) => {
  return item.includes("a");
});
console.log(`4-이름에 a를 포함한 사람${data}`);

let doubleLetter = names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => {
    return letter == splitName[index + 1];
  });
});

console.log(doubleLetter);
console.log(names.some((item) => item.length >= 20)); // true
//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
console.log(
  names.some((item) => {
    let splitName = item.split(" ");
    splitName.pop();
    console.log("🚀 ~ file: main.js:87 ~ names.some ~ splitName", splitName);
    return splitName.some((eachName) =>
      eachName.toLocaleUpperCase().includes("P")
    );
  })
);
// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?
console.log(
  names.every((item) => {
    return item.length >= 20;
  })
);
console.log(
  names.every((item) => {
    return item.includes("a");
  })
);

console.log(
  names.find((item) => {
    return item.length >= 20;
  })
);
// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
console.log(
  names.find((item) => {
    return item.split(" ").length >= 3;
  })
);
