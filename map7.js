function map7(map) {
  if (map.get("a") === map.get("b")) {
    map.delete("a");
    map.delete("b");
  }
  return map;
}

let map1 = new Map([
  ["a", "aaa"],
  ["b", "aaa"],
  ["c", "cake"],
]);

let newarray = map7(map1);
console.log(newarray);
