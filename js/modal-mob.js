let n = 0;
function changeStr(str) {
  return function (newStr) {
    str = `${++n}+${str}${newStr}`;
    return str;
  };
}

const initStartStr = changeStr("Test");
console.dir(initStartStr);

setTimeout(() => {
  const s1 = initStartStr("+ONE");
  const s2 = initStartStr("+TWO");
  const s3 = initStartStr("+THREE");
  console.dir(initStartStr);
}, 1000);
// console.log("Result: ", change1, change2);
