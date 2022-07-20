function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
  );
}

console.log(uuidv4());

// 인자로 넘겨준 함수가 동일한 함수를 참조하는지 test해보기!!
// <li onClick={onClick}></li>에서 li마다 같은 주소값의 onClick인지 check
